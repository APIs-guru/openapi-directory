from dataclasses import dataclass, field



@dataclass
class AppPkcs12P12File:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    p12_file: str = field(metadata={'multipart_form': { 'field_name': 'p12File' }})
    

@dataclass
class AppPkcs12:
    p12_file: AppPkcs12P12File = field(metadata={'multipart_form': { 'file': True }})
    p12_pass: str = field(metadata={'multipart_form': { 'field_name': 'p12Pass' }})
    

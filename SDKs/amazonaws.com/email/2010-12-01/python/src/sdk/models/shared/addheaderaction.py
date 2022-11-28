from dataclasses import dataclass, field



@dataclass
class AddHeaderAction:
    r"""AddHeaderAction
    <p>When included in a receipt rule, this action adds a header to the received email.</p> <p>For information about adding a header using a receipt rule, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    header_name: str = field()
    header_value: str = field()
    

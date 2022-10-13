from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartTableDataImportJobPathParams:
    table_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tableId', 'style': 'simple', 'explode': False }})
    workbook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workbookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartTableDataImportJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class StartTableDataImportJobRequestBodyDataFormatEnum(str, Enum):
    DELIMITED_TEXT = "DELIMITED_TEXT"


@dataclass_json
@dataclass
class StartTableDataImportJobRequestBodyDataSource:
    data_source_config: Optional[shared.ImportDataSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceConfig' }})
    

@dataclass_json
@dataclass
class StartTableDataImportJobRequestBodyImportOptions:
    delimited_text_options: Optional[shared.DelimitedTextImportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delimitedTextOptions' }})
    destination_options: Optional[shared.DestinationOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationOptions' }})
    

@dataclass_json
@dataclass
class StartTableDataImportJobRequestBody:
    client_request_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    data_format: StartTableDataImportJobRequestBodyDataFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFormat' }})
    data_source: StartTableDataImportJobRequestBodyDataSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSource' }})
    import_options: StartTableDataImportJobRequestBodyImportOptions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importOptions' }})
    

@dataclass
class StartTableDataImportJobRequest:
    path_params: StartTableDataImportJobPathParams = field(default=None)
    headers: StartTableDataImportJobHeaders = field(default=None)
    request: StartTableDataImportJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartTableDataImportJobResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    start_table_data_import_job_result: Optional[shared.StartTableDataImportJobResult] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    

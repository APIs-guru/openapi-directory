from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeReplicationTaskAssessmentResultsQueryParams:
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    
class DescribeReplicationTaskAssessmentResultsXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_TASK_ASSESSMENT_RESULTS = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults"


@dataclass
class DescribeReplicationTaskAssessmentResultsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeReplicationTaskAssessmentResultsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeReplicationTaskAssessmentResultsRequest:
    query_params: DescribeReplicationTaskAssessmentResultsQueryParams = field(default=None)
    headers: DescribeReplicationTaskAssessmentResultsHeaders = field(default=None)
    request: shared.DescribeReplicationTaskAssessmentResultsMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeReplicationTaskAssessmentResultsResponse:
    content_type: str = field(default=None)
    describe_replication_task_assessment_results_response: Optional[shared.DescribeReplicationTaskAssessmentResultsResponse] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribeApplicableIndividualAssessmentsQueryParams:
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    
class DescribeApplicableIndividualAssessmentsXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_APPLICABLE_INDIVIDUAL_ASSESSMENTS = "AmazonDMSv20160101.DescribeApplicableIndividualAssessments"


@dataclass
class DescribeApplicableIndividualAssessmentsHeaders:
    x_amz_target: DescribeApplicableIndividualAssessmentsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeApplicableIndividualAssessmentsRequest:
    headers: DescribeApplicableIndividualAssessmentsHeaders = field()
    query_params: DescribeApplicableIndividualAssessmentsQueryParams = field()
    request: shared.DescribeApplicableIndividualAssessmentsMessage = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeApplicableIndividualAssessmentsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_fault: Optional[Any] = field(default=None)
    describe_applicable_individual_assessments_response: Optional[shared.DescribeApplicableIndividualAssessmentsResponse] = field(default=None)
    invalid_resource_state_fault: Optional[Any] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    

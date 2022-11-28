import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidateAssessmentReportIntegrityHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class ValidateAssessmentReportIntegrityRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3RelativePath" })
  s3RelativePath: string;
}


export class ValidateAssessmentReportIntegrityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ValidateAssessmentReportIntegrityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ValidateAssessmentReportIntegrityRequestBody;
}


export class ValidateAssessmentReportIntegrityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validateAssessmentReportIntegrityResponse?: shared.ValidateAssessmentReportIntegrityResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}

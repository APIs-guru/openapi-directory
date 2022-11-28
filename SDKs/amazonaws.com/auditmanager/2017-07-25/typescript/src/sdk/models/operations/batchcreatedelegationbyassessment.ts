import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchCreateDelegationByAssessmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;
}


export class BatchCreateDelegationByAssessmentHeaders extends SpeakeasyBase {
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


export class BatchCreateDelegationByAssessmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createDelegationRequests", elemType: shared.CreateDelegationRequest })
  createDelegationRequests: shared.CreateDelegationRequest[];
}


export class BatchCreateDelegationByAssessmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatchCreateDelegationByAssessmentPathParams;

  @SpeakeasyMetadata()
  headers: BatchCreateDelegationByAssessmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchCreateDelegationByAssessmentRequestBody;
}


export class BatchCreateDelegationByAssessmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  batchCreateDelegationByAssessmentResponse?: shared.BatchCreateDelegationByAssessmentResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchCreateDelegationByAssessmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;
}


export class BatchCreateDelegationByAssessmentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class BatchCreateDelegationByAssessmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=createDelegationRequests", elemType: shared.CreateDelegationRequest })
  createDelegationRequests: shared.CreateDelegationRequest[];
}


export class BatchCreateDelegationByAssessmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchCreateDelegationByAssessmentPathParams;

  @Metadata()
  headers: BatchCreateDelegationByAssessmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchCreateDelegationByAssessmentRequestBody;
}


export class BatchCreateDelegationByAssessmentResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  batchCreateDelegationByAssessmentResponse?: shared.BatchCreateDelegationByAssessmentResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}

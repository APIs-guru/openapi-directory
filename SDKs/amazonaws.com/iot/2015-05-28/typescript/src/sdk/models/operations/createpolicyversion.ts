import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePolicyVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=policyName" })
  policyName: string;
}


export class CreatePolicyVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=setAsDefault" })
  setAsDefault?: boolean;
}


export class CreatePolicyVersionHeaders extends SpeakeasyBase {
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


export class CreatePolicyVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyDocument" })
  policyDocument: string;
}


export class CreatePolicyVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreatePolicyVersionPathParams;

  @Metadata()
  queryParams: CreatePolicyVersionQueryParams;

  @Metadata()
  headers: CreatePolicyVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreatePolicyVersionRequestBody;
}


export class CreatePolicyVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPolicyVersionResponse?: shared.CreatePolicyVersionResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  malformedPolicyException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  versionsLimitExceededException?: any;
}

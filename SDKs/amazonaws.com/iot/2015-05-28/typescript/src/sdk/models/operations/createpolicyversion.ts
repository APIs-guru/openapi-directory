import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePolicyVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=policyName" })
  policyName: string;
}


export class CreatePolicyVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setAsDefault" })
  setAsDefault?: boolean;
}


export class CreatePolicyVersionHeaders extends SpeakeasyBase {
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


export class CreatePolicyVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyDocument" })
  policyDocument: string;
}


export class CreatePolicyVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreatePolicyVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: CreatePolicyVersionQueryParams;

  @SpeakeasyMetadata()
  headers: CreatePolicyVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreatePolicyVersionRequestBody;
}


export class CreatePolicyVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPolicyVersionResponse?: shared.CreatePolicyVersionResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  malformedPolicyException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  versionsLimitExceededException?: any;
}

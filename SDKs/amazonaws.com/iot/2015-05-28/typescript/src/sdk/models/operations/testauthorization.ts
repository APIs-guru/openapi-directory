import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestAuthorizationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=clientId" })
  clientId?: string;
}


export class TestAuthorizationHeaders extends SpeakeasyBase {
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


export class TestAuthorizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authInfos", elemType: shared.AuthInfo })
  authInfos: shared.AuthInfo[];

  @Metadata({ data: "json, name=cognitoIdentityPoolId" })
  cognitoIdentityPoolId?: string;

  @Metadata({ data: "json, name=policyNamesToAdd" })
  policyNamesToAdd?: string[];

  @Metadata({ data: "json, name=policyNamesToSkip" })
  policyNamesToSkip?: string[];

  @Metadata({ data: "json, name=principal" })
  principal?: string;
}


export class TestAuthorizationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TestAuthorizationQueryParams;

  @Metadata()
  headers: TestAuthorizationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: TestAuthorizationRequestBody;
}


export class TestAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  testAuthorizationResponse?: shared.TestAuthorizationResponse;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}

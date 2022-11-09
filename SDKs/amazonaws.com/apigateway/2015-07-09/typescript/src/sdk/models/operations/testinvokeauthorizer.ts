import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestInvokeAuthorizerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=authorizer_id" })
  authorizerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class TestInvokeAuthorizerHeaders extends SpeakeasyBase {
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


export class TestInvokeAuthorizerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalContext" })
  additionalContext?: Map<string, string>;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=multiValueHeaders" })
  multiValueHeaders?: Map<string, string[]>;

  @Metadata({ data: "json, name=pathWithQueryString" })
  pathWithQueryString?: string;

  @Metadata({ data: "json, name=stageVariables" })
  stageVariables?: Map<string, string>;
}


export class TestInvokeAuthorizerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestInvokeAuthorizerPathParams;

  @Metadata()
  headers: TestInvokeAuthorizerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: TestInvokeAuthorizerRequestBody;
}


export class TestInvokeAuthorizerResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  testInvokeAuthorizerResponse?: shared.TestInvokeAuthorizerResponse;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}

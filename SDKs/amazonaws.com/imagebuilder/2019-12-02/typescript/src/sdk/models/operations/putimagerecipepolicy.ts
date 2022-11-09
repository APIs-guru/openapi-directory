import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutImageRecipePolicyHeaders extends SpeakeasyBase {
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


export class PutImageRecipePolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageRecipeArn" })
  imageRecipeArn: string;

  @Metadata({ data: "json, name=policy" })
  policy: string;
}


export class PutImageRecipePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutImageRecipePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutImageRecipePolicyRequestBody;
}


export class PutImageRecipePolicyResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  putImageRecipePolicyResponse?: shared.PutImageRecipePolicyResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}

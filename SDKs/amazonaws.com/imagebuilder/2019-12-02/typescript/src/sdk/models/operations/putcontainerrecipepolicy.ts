import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutContainerRecipePolicyHeaders extends SpeakeasyBase {
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


export class PutContainerRecipePolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerRecipeArn" })
  containerRecipeArn: string;

  @Metadata({ data: "json, name=policy" })
  policy: string;
}


export class PutContainerRecipePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutContainerRecipePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutContainerRecipePolicyRequestBody;
}


export class PutContainerRecipePolicyResponse extends SpeakeasyBase {
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
  putContainerRecipePolicyResponse?: shared.PutContainerRecipePolicyResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}

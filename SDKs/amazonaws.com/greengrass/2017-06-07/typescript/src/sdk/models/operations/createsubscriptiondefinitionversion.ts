import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSubscriptionDefinitionVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionDefinitionId" })
  subscriptionDefinitionId: string;
}


export class CreateSubscriptionDefinitionVersionHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}


export class CreateSubscriptionDefinitionVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Subscriptions", elemType: shared.Subscription })
  subscriptions?: shared.Subscription[];
}


export class CreateSubscriptionDefinitionVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSubscriptionDefinitionVersionPathParams;

  @Metadata()
  headers: CreateSubscriptionDefinitionVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSubscriptionDefinitionVersionRequestBody;
}


export class CreateSubscriptionDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createSubscriptionDefinitionVersionResponse?: shared.CreateSubscriptionDefinitionVersionResponse;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSubscriptionDefinitionHeaders extends SpeakeasyBase {
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


// CreateSubscriptionDefinitionRequestBodyInitialVersion
/** 
 * Information about a subscription definition version.
**/
export class CreateSubscriptionDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Subscriptions", elemType: shared.Subscription })
  subscriptions?: shared.Subscription[];
}


export class CreateSubscriptionDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InitialVersion" })
  initialVersion?: CreateSubscriptionDefinitionRequestBodyInitialVersion;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateSubscriptionDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSubscriptionDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSubscriptionDefinitionRequestBody;
}


export class CreateSubscriptionDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createSubscriptionDefinitionResponse?: shared.CreateSubscriptionDefinitionResponse;

  @Metadata()
  statusCode: number;
}

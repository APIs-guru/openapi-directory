import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiDestinationStateEnum } from "./apidestinationstateenum";
import { ApiDestinationHttpMethodEnum } from "./apidestinationhttpmethodenum";


// ApiDestination
/** 
 * Contains details about an API destination.
**/
export class ApiDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiDestinationArn" })
  apiDestinationArn?: string;

  @Metadata({ data: "json, name=ApiDestinationState" })
  apiDestinationState?: ApiDestinationStateEnum;

  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=HttpMethod" })
  httpMethod?: ApiDestinationHttpMethodEnum;

  @Metadata({ data: "json, name=InvocationEndpoint" })
  invocationEndpoint?: string;

  @Metadata({ data: "json, name=InvocationRateLimitPerSecond" })
  invocationRateLimitPerSecond?: number;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

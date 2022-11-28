import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiDestinationStateEnum } from "./apidestinationstateenum";
import { ApiDestinationHttpMethodEnum } from "./apidestinationhttpmethodenum";



// ApiDestination
/** 
 * Contains details about an API destination.
**/
export class ApiDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiDestinationArn" })
  apiDestinationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ApiDestinationState" })
  apiDestinationState?: ApiDestinationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=HttpMethod" })
  httpMethod?: ApiDestinationHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=InvocationEndpoint" })
  invocationEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=InvocationRateLimitPerSecond" })
  invocationRateLimitPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

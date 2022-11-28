import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiDestinationHttpMethodEnum } from "./apidestinationhttpmethodenum";



export class CreateApiDestinationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=HttpMethod" })
  httpMethod: ApiDestinationHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=InvocationEndpoint" })
  invocationEndpoint: string;

  @SpeakeasyMetadata({ data: "json, name=InvocationRateLimitPerSecond" })
  invocationRateLimitPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}

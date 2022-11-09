import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiDestinationHttpMethodEnum } from "./apidestinationhttpmethodenum";


export class UpdateApiDestinationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=HttpMethod" })
  httpMethod?: ApiDestinationHttpMethodEnum;

  @Metadata({ data: "json, name=InvocationEndpoint" })
  invocationEndpoint?: string;

  @Metadata({ data: "json, name=InvocationRateLimitPerSecond" })
  invocationRateLimitPerSecond?: number;

  @Metadata({ data: "json, name=Name" })
  name: string;
}

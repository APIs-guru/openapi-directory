import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DevEndpoint } from "./devendpoint";


export class GetDevEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DevEndpoint" })
  devEndpoint?: DevEndpoint;
}

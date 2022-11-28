import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevEndpoint } from "./devendpoint";



export class GetDevEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DevEndpoint" })
  devEndpoint?: DevEndpoint;
}

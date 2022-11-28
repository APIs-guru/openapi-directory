import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevEndpoint } from "./devendpoint";



export class GetDevEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DevEndpoints", elemType: DevEndpoint })
  devEndpoints?: DevEndpoint[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetDevEndpointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DevEndpointNames" })
  devEndpointNames: string[];
}

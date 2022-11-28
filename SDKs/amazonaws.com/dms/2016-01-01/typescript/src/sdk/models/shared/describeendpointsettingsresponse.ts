import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointSetting } from "./endpointsetting";



export class DescribeEndpointSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointSettings", elemType: EndpointSetting })
  endpointSettings?: EndpointSetting[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}

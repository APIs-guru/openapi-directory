import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointSetting } from "./endpointsetting";


export class DescribeEndpointSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointSettings", elemType: shared.EndpointSetting })
  endpointSettings?: EndpointSetting[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}

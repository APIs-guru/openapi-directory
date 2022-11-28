import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComponentVersion } from "./componentversion";



export class ListComponentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentVersionList", elemType: ComponentVersion })
  componentVersionList?: ComponentVersion[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}

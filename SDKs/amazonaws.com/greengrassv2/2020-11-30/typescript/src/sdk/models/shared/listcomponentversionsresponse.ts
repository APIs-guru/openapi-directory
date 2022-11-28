import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComponentVersionListItem } from "./componentversionlistitem";



export class ListComponentVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentVersions", elemType: ComponentVersionListItem })
  componentVersions?: ComponentVersionListItem[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

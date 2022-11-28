import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControlMetadata } from "./controlmetadata";



export class ListControlsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controlMetadataList", elemType: ControlMetadata })
  controlMetadataList?: ControlMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveRegionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}

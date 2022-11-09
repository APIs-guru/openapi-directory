import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveRegionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SharedDirectory } from "./shareddirectory";



export class AcceptSharedDirectoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SharedDirectory" })
  sharedDirectory?: SharedDirectory;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SharedDirectory } from "./shareddirectory";


export class AcceptSharedDirectoryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SharedDirectory" })
  sharedDirectory?: SharedDirectory;
}

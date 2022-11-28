import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NfsMountOptions } from "./nfsmountoptions";
import { OnPremConfig } from "./onpremconfig";
import { TagListEntry } from "./taglistentry";



// CreateLocationNfsRequest
/** 
 * CreateLocationNfsRequest
**/
export class CreateLocationNfsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MountOptions" })
  mountOptions?: NfsMountOptions;

  @SpeakeasyMetadata({ data: "json, name=OnPremConfig" })
  onPremConfig: OnPremConfig;

  @SpeakeasyMetadata({ data: "json, name=ServerHostname" })
  serverHostname: string;

  @SpeakeasyMetadata({ data: "json, name=Subdirectory" })
  subdirectory: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: TagListEntry })
  tags?: TagListEntry[];
}

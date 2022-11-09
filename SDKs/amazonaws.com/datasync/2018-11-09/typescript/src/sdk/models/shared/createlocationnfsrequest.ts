import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NfsMountOptions } from "./nfsmountoptions";
import { OnPremConfig } from "./onpremconfig";
import { TagListEntry } from "./taglistentry";


// CreateLocationNfsRequest
/** 
 * CreateLocationNfsRequest
**/
export class CreateLocationNfsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MountOptions" })
  mountOptions?: NfsMountOptions;

  @Metadata({ data: "json, name=OnPremConfig" })
  onPremConfig: OnPremConfig;

  @Metadata({ data: "json, name=ServerHostname" })
  serverHostname: string;

  @Metadata({ data: "json, name=Subdirectory" })
  subdirectory: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.TagListEntry })
  tags?: TagListEntry[];
}

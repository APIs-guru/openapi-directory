import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SmbMountOptions } from "./smbmountoptions";
import { TagListEntry } from "./taglistentry";


// CreateLocationSmbRequest
/** 
 * CreateLocationSmbRequest
**/
export class CreateLocationSmbRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArns" })
  agentArns: string[];

  @Metadata({ data: "json, name=Domain" })
  domain?: string;

  @Metadata({ data: "json, name=MountOptions" })
  mountOptions?: SmbMountOptions;

  @Metadata({ data: "json, name=Password" })
  password: string;

  @Metadata({ data: "json, name=ServerHostname" })
  serverHostname: string;

  @Metadata({ data: "json, name=Subdirectory" })
  subdirectory: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.TagListEntry })
  tags?: TagListEntry[];

  @Metadata({ data: "json, name=User" })
  user: string;
}

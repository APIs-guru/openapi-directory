import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SmbMountOptions } from "./smbmountoptions";


export class UpdateLocationSmbRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @Metadata({ data: "json, name=Domain" })
  domain?: string;

  @Metadata({ data: "json, name=LocationArn" })
  locationArn: string;

  @Metadata({ data: "json, name=MountOptions" })
  mountOptions?: SmbMountOptions;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;

  @Metadata({ data: "json, name=User" })
  user?: string;
}

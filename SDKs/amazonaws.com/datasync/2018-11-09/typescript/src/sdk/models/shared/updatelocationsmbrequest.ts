import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SmbMountOptions } from "./smbmountoptions";



export class UpdateLocationSmbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn: string;

  @SpeakeasyMetadata({ data: "json, name=MountOptions" })
  mountOptions?: SmbMountOptions;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: string;
}

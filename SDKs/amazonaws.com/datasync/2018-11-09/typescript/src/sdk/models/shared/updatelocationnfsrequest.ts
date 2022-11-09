import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NfsMountOptions } from "./nfsmountoptions";
import { OnPremConfig } from "./onpremconfig";


export class UpdateLocationNfsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LocationArn" })
  locationArn: string;

  @Metadata({ data: "json, name=MountOptions" })
  mountOptions?: NfsMountOptions;

  @Metadata({ data: "json, name=OnPremConfig" })
  onPremConfig?: OnPremConfig;

  @Metadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;
}

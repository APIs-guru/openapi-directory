import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NfsMountOptions } from "./nfsmountoptions";
import { OnPremConfig } from "./onpremconfig";



export class UpdateLocationNfsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn: string;

  @SpeakeasyMetadata({ data: "json, name=MountOptions" })
  mountOptions?: NfsMountOptions;

  @SpeakeasyMetadata({ data: "json, name=OnPremConfig" })
  onPremConfig?: OnPremConfig;

  @SpeakeasyMetadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;
}

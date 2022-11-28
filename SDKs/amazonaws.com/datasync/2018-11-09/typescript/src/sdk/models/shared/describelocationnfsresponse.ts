import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NfsMountOptions } from "./nfsmountoptions";
import { OnPremConfig } from "./onpremconfig";



// DescribeLocationNfsResponse
/** 
 * DescribeLocationNfsResponse
**/
export class DescribeLocationNfsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=MountOptions" })
  mountOptions?: NfsMountOptions;

  @SpeakeasyMetadata({ data: "json, name=OnPremConfig" })
  onPremConfig?: OnPremConfig;
}

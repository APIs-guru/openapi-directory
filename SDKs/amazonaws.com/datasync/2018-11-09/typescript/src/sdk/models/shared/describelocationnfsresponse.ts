import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NfsMountOptions } from "./nfsmountoptions";
import { OnPremConfig } from "./onpremconfig";


// DescribeLocationNfsResponse
/** 
 * DescribeLocationNfsResponse
**/
export class DescribeLocationNfsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @Metadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @Metadata({ data: "json, name=MountOptions" })
  mountOptions?: NfsMountOptions;

  @Metadata({ data: "json, name=OnPremConfig" })
  onPremConfig?: OnPremConfig;
}

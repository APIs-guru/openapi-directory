import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SmbMountOptions } from "./smbmountoptions";



// DescribeLocationSmbResponse
/** 
 * DescribeLocationSmbResponse
**/
export class DescribeLocationSmbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=MountOptions" })
  mountOptions?: SmbMountOptions;

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: string;
}

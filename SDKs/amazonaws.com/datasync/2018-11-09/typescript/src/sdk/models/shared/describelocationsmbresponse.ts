import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SmbMountOptions } from "./smbmountoptions";


// DescribeLocationSmbResponse
/** 
 * DescribeLocationSmbResponse
**/
export class DescribeLocationSmbResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Domain" })
  domain?: string;

  @Metadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @Metadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @Metadata({ data: "json, name=MountOptions" })
  mountOptions?: SmbMountOptions;

  @Metadata({ data: "json, name=User" })
  user?: string;
}

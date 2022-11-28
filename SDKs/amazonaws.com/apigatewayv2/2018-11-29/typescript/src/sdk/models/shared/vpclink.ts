import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcLinkStatusEnum } from "./vpclinkstatusenum";
import { VpcLinkVersionEnum } from "./vpclinkversionenum";



// VpcLink
/** 
 * Represents a VPC link.
**/
export class VpcLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=VpcLinkId" })
  vpcLinkId: string;

  @SpeakeasyMetadata({ data: "json, name=VpcLinkStatus" })
  vpcLinkStatus?: VpcLinkStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=VpcLinkStatusMessage" })
  vpcLinkStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcLinkVersion" })
  vpcLinkVersion?: VpcLinkVersionEnum;
}

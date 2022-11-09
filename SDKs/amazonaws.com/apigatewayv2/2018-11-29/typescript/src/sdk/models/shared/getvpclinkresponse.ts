import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcLinkStatusEnum } from "./vpclinkstatusenum";
import { VpcLinkVersionEnum } from "./vpclinkversionenum";


export class GetVpcLinkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=VpcLinkId" })
  vpcLinkId?: string;

  @Metadata({ data: "json, name=VpcLinkStatus" })
  vpcLinkStatus?: VpcLinkStatusEnum;

  @Metadata({ data: "json, name=VpcLinkStatusMessage" })
  vpcLinkStatusMessage?: string;

  @Metadata({ data: "json, name=VpcLinkVersion" })
  vpcLinkVersion?: VpcLinkVersionEnum;
}

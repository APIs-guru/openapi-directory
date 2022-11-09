import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfiguration
/** 
 * The VPC configuration provisioned for the host.
**/
export class VpcConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=TlsCertificate" })
  tlsCertificate?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId: string;
}

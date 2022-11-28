import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfiguration
/** 
 * The VPC configuration provisioned for the host.
**/
export class VpcConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=TlsCertificate" })
  tlsCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId: string;
}

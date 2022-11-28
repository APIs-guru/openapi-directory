import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyHsmRequest
/** 
 * Contains the inputs for the <a>ModifyHsm</a> operation.
**/
export class ModifyHsmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EniIp" })
  eniIp?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=HsmArn" })
  hsmArn: string;

  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=SyslogIp" })
  syslogIp?: string;
}

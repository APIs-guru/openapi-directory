import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModifyHsmRequest
/** 
 * Contains the inputs for the <a>ModifyHsm</a> operation.
**/
export class ModifyHsmRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EniIp" })
  eniIp?: string;

  @Metadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @Metadata({ data: "json, name=HsmArn" })
  hsmArn: string;

  @Metadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=SyslogIp" })
  syslogIp?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EfsAuthorizationConfigIamEnum } from "./efsauthorizationconfigiamenum";


// EfsAuthorizationConfig
/** 
 * The authorization configuration details for the Amazon EFS file system.
**/
export class EfsAuthorizationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPointId" })
  accessPointId?: string;

  @Metadata({ data: "json, name=iam" })
  iam?: EfsAuthorizationConfigIamEnum;
}

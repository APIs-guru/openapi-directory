import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EfsAuthorizationConfigIamEnum } from "./efsauthorizationconfigiamenum";



// EfsAuthorizationConfig
/** 
 * The authorization configuration details for the Amazon EFS file system.
**/
export class EfsAuthorizationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPointId" })
  accessPointId?: string;

  @SpeakeasyMetadata({ data: "json, name=iam" })
  iam?: EfsAuthorizationConfigIamEnum;
}

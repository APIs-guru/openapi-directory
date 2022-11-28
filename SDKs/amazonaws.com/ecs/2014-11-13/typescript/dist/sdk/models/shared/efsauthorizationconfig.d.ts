import { SpeakeasyBase } from "../../../internal/utils";
import { EfsAuthorizationConfigIamEnum } from "./efsauthorizationconfigiamenum";
/**
 * The authorization configuration details for the Amazon EFS file system.
**/
export declare class EfsAuthorizationConfig extends SpeakeasyBase {
    accessPointId?: string;
    iam?: EfsAuthorizationConfigIamEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";
/**
 * Details for an Amazon EMR Studio session mapping including creation time, user or group ID, Studio ID, and so on.
**/
export declare class SessionMappingDetail extends SpeakeasyBase {
    creationTime?: Date;
    identityId?: string;
    identityName?: string;
    identityType?: IdentityTypeEnum;
    lastModifiedTime?: Date;
    sessionPolicyArn?: string;
    studioId?: string;
}

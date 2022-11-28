import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";
/**
 * Details for an Amazon EMR Studio session mapping. The details do not include the time the session mapping was last modified.
**/
export declare class SessionMappingSummary extends SpeakeasyBase {
    creationTime?: Date;
    identityId?: string;
    identityName?: string;
    identityType?: IdentityTypeEnum;
    sessionPolicyArn?: string;
    studioId?: string;
}

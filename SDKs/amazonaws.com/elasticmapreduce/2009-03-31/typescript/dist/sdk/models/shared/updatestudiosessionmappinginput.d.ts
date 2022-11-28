import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";
export declare class UpdateStudioSessionMappingInput extends SpeakeasyBase {
    identityId?: string;
    identityName?: string;
    identityType: IdentityTypeEnum;
    sessionPolicyArn: string;
    studioId: string;
}

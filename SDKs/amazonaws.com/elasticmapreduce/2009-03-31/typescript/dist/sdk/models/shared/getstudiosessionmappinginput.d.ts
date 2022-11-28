import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";
export declare class GetStudioSessionMappingInput extends SpeakeasyBase {
    identityId?: string;
    identityName?: string;
    identityType: IdentityTypeEnum;
    studioId: string;
}

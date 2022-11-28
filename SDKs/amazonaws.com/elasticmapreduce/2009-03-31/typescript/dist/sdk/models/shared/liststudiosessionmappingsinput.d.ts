import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";
export declare class ListStudioSessionMappingsInput extends SpeakeasyBase {
    identityType?: IdentityTypeEnum;
    marker?: string;
    studioId?: string;
}

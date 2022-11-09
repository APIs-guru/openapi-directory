import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LdapsTypeEnum } from "./ldapstypeenum";
export declare class DescribeLdapsSettingsRequest extends SpeakeasyBase {
    directoryId: string;
    limit?: number;
    nextToken?: string;
    type?: LdapsTypeEnum;
}

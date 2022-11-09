import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LdapsTypeEnum } from "./ldapstypeenum";
export declare class DisableLdapsRequest extends SpeakeasyBase {
    directoryId: string;
    type: LdapsTypeEnum;
}

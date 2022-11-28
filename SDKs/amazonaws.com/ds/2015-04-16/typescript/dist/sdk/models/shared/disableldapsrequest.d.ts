import { SpeakeasyBase } from "../../../internal/utils";
import { LdapsTypeEnum } from "./ldapstypeenum";
export declare class DisableLdapsRequest extends SpeakeasyBase {
    directoryId: string;
    type: LdapsTypeEnum;
}

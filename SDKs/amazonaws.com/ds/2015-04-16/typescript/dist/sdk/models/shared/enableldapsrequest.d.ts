import { SpeakeasyBase } from "../../../internal/utils";
import { LdapsTypeEnum } from "./ldapstypeenum";
export declare class EnableLdapsRequest extends SpeakeasyBase {
    directoryId: string;
    type: LdapsTypeEnum;
}

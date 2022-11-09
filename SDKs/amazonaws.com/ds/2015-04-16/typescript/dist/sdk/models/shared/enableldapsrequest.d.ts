import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LdapsTypeEnum } from "./ldapstypeenum";
export declare class EnableLdapsRequest extends SpeakeasyBase {
    directoryId: string;
    type: LdapsTypeEnum;
}

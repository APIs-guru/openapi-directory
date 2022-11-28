import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStateEnum } from "./optionstateenum";
/**
 * The status of domain configuration option.
**/
export declare class OptionStatus extends SpeakeasyBase {
    creationDate: Date;
    pendingDeletion?: boolean;
    state: OptionStateEnum;
    updateDate: Date;
    updateVersion?: number;
}

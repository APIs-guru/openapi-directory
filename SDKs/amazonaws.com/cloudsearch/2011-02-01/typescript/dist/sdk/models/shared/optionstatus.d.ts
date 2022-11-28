import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStateEnum } from "./optionstateenum";
/**
 * The status of an option, including when it was last updated and whether it is actively in use for searches.
**/
export declare class OptionStatus extends SpeakeasyBase {
    creationDate: Date;
    pendingDeletion?: boolean;
    state: OptionStateEnum;
    updateDate: Date;
    updateVersion?: number;
}

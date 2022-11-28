import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateAction } from "./updateaction";
export declare class UpdateActionsMessage extends SpeakeasyBase {
    marker?: string;
    updateActions?: UpdateAction[];
}

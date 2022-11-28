import { SpeakeasyBase } from "../../../internal/utils";
import { TargetTypeEnum } from "./targettypeenum";
/**
 * Identifier that contains details about the directory consumer account with whom the directory is being unshared.
**/
export declare class UnshareTarget extends SpeakeasyBase {
    id: string;
    type: TargetTypeEnum;
}

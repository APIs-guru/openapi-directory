import { SpeakeasyBase } from "../../../internal/utils";
import { TargetTypeEnum } from "./targettypeenum";
/**
 * Identifier that contains details about the directory consumer account.
**/
export declare class ShareTarget extends SpeakeasyBase {
    id: string;
    type: TargetTypeEnum;
}

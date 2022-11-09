import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AddonIssueCodeEnum } from "./addonissuecodeenum";
/**
 * An issue related to an add-on.
**/
export declare class AddonIssue extends SpeakeasyBase {
    code?: AddonIssueCodeEnum;
    message?: string;
    resourceIds?: string[];
}

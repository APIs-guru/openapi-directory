import { SpeakeasyBase } from "../../../internal/utils";
import { NodegroupIssueCodeEnum } from "./nodegroupissuecodeenum";
/**
 * An object representing an issue with an Amazon EKS resource.
**/
export declare class Issue extends SpeakeasyBase {
    code?: NodegroupIssueCodeEnum;
    message?: string;
    resourceIds?: string[];
}

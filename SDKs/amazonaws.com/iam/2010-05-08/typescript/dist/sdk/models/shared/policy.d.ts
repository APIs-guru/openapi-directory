import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
**/
export declare class Policy extends SpeakeasyBase {
    arn?: string;
    attachmentCount?: number;
    createDate?: Date;
    defaultVersionId?: string;
    description?: string;
    isAttachable?: boolean;
    path?: string;
    permissionsBoundaryUsageCount?: number;
    policyId?: string;
    policyName?: string;
    tags?: Tag[];
    updateDate?: Date;
}

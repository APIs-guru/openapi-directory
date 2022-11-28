import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains information about a version of a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicyVersion</a>, <a>GetPolicyVersion</a>, <a>ListPolicyVersions</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
**/
export declare class PolicyVersion extends SpeakeasyBase {
    createDate?: Date;
    document?: string;
    isDefaultVersion?: boolean;
    versionId?: string;
}

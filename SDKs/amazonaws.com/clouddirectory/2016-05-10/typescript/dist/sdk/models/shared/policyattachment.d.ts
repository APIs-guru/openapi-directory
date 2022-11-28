import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.
**/
export declare class PolicyAttachment extends SpeakeasyBase {
    objectIdentifier?: string;
    policyId?: string;
    policyType?: string;
}

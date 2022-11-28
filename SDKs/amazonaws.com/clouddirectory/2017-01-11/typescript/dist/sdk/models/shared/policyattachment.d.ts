import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
**/
export declare class PolicyAttachment extends SpeakeasyBase {
    objectIdentifier?: string;
    policyId?: string;
    policyType?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resource tags that Firewall Manager uses to determine if a particular resource should be included or excluded from the Firewall Manager policy. Tags enable you to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. Firewall Manager combines the tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have all the specified tags to be included or excluded. For more information, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a>.
**/
export declare class ResourceTag extends SpeakeasyBase {
    key: string;
    value?: string;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p>A description of a tag. Every tag is a key-value pair. You can add up to 50 tags to a single DAX cluster.</p> <p>AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code>.</p> <p>You cannot backdate the application of a tag.</p>
**/
export declare class Tag extends SpeakeasyBase {
    key?: string;
    value?: string;
}

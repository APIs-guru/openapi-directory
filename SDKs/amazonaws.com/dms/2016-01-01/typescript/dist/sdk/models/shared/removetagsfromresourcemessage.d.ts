import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Removes one or more tags from an DMS resource.
**/
export declare class RemoveTagsFromResourceMessage extends SpeakeasyBase {
    resourceArn: string;
    tagKeys: string[];
}

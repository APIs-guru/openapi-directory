import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This input identifies an Amazon EMR resource and a list of tags to remove.
**/
export declare class RemoveTagsInput extends SpeakeasyBase {
    resourceId: string;
    tagKeys: string[];
}

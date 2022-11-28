import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * This input identifies an Amazon EMR resource and a list of tags to attach.
**/
export declare class AddTagsInput extends SpeakeasyBase {
    resourceId: string;
    tags: Tag[];
}

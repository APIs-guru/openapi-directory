import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
/**
 * Contains the parameters for AddTags.
**/
export declare class AddTagsInput extends SpeakeasyBase {
    pipelineId: string;
    tags: Tag[];
}

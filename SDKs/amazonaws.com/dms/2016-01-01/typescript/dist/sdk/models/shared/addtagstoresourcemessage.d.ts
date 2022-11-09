import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
/**
 * Associates a set of tags with an DMS resource.
**/
export declare class AddTagsToResourceMessage extends SpeakeasyBase {
    resourceArn: string;
    tags: Tag[];
}

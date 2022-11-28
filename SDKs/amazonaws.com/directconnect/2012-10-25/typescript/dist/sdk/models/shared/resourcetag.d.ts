import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Information about a tag associated with an Direct Connect resource.
**/
export declare class ResourceTag extends SpeakeasyBase {
    resourceArn?: string;
    tags?: Tag[];
}

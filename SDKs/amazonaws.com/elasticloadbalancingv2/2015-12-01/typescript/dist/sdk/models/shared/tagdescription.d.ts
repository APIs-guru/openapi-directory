import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The tags associated with a resource.
**/
export declare class TagDescription extends SpeakeasyBase {
    resourceArn?: string;
    tags?: Tag[];
}

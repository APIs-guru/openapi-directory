import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation.
**/
export declare class RemoveTagsFromOnPremisesInstancesInput extends SpeakeasyBase {
    instanceNames: string[];
    tags: Tag[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Represents the input of, and adds tags to, an on-premises instance operation.
**/
export declare class AddTagsToOnPremisesInstancesInput extends SpeakeasyBase {
    instanceNames: string[];
    tags: Tag[];
}

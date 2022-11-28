import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TaskDefinition } from "./taskdefinition";
export declare class RegisterTaskDefinitionResponse extends SpeakeasyBase {
    tags?: Tag[];
    taskDefinition?: TaskDefinition;
}

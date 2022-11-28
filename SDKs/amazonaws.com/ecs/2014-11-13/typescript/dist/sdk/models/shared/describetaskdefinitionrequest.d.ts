import { SpeakeasyBase } from "../../../internal/utils";
import { TaskDefinitionFieldEnum } from "./taskdefinitionfieldenum";
export declare class DescribeTaskDefinitionRequest extends SpeakeasyBase {
    include?: TaskDefinitionFieldEnum[];
    taskDefinition: string;
}

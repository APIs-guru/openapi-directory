import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentDependencyTypeEnum } from "./componentdependencytypeenum";
/**
 * Contains information about a component dependency for a Lambda function component.
**/
export declare class ComponentDependencyRequirement extends SpeakeasyBase {
    dependencyType?: ComponentDependencyTypeEnum;
    versionRequirement?: string;
}

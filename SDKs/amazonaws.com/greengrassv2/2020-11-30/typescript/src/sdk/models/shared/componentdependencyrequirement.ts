import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComponentDependencyTypeEnum } from "./componentdependencytypeenum";


// ComponentDependencyRequirement
/** 
 * Contains information about a component dependency for a Lambda function component.
**/
export class ComponentDependencyRequirement extends SpeakeasyBase {
  @Metadata({ data: "json, name=dependencyType" })
  dependencyType?: ComponentDependencyTypeEnum;

  @Metadata({ data: "json, name=versionRequirement" })
  versionRequirement?: string;
}

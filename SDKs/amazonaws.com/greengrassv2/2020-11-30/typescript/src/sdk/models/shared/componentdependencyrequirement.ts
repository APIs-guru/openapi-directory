import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComponentDependencyTypeEnum } from "./componentdependencytypeenum";



// ComponentDependencyRequirement
/** 
 * Contains information about a component dependency for a Lambda function component.
**/
export class ComponentDependencyRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dependencyType" })
  dependencyType?: ComponentDependencyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=versionRequirement" })
  versionRequirement?: string;
}

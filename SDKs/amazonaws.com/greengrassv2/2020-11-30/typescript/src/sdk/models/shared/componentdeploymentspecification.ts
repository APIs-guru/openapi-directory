import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComponentConfigurationUpdate } from "./componentconfigurationupdate";
import { ComponentRunWith } from "./componentrunwith";


// ComponentDeploymentSpecification
/** 
 * Contains information about a component to deploy.
**/
export class ComponentDeploymentSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @Metadata({ data: "json, name=configurationUpdate" })
  configurationUpdate?: ComponentConfigurationUpdate;

  @Metadata({ data: "json, name=runWith" })
  runWith?: ComponentRunWith;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComponentConfigurationUpdate } from "./componentconfigurationupdate";
import { ComponentRunWith } from "./componentrunwith";



// ComponentDeploymentSpecification
/** 
 * Contains information about a component to deploy.
**/
export class ComponentDeploymentSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=configurationUpdate" })
  configurationUpdate?: ComponentConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=runWith" })
  runWith?: ComponentRunWith;
}

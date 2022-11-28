import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceConfiguration } from "./resourceconfiguration";
import { Variable } from "./variable";



// ContainerDatasetAction
/** 
 * Information required to run the <code>containerAction</code> to produce dataset contents.
**/
export class ContainerDatasetAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionRoleArn" })
  executionRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: string;

  @SpeakeasyMetadata({ data: "json, name=resourceConfiguration" })
  resourceConfiguration: ResourceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=variables", elemType: Variable })
  variables?: Variable[];
}

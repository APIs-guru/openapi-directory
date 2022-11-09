import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceConfiguration } from "./resourceconfiguration";
import { Variable } from "./variable";


// ContainerDatasetAction
/** 
 * Information required to run the <code>containerAction</code> to produce dataset contents.
**/
export class ContainerDatasetAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionRoleArn" })
  executionRoleArn: string;

  @Metadata({ data: "json, name=image" })
  image: string;

  @Metadata({ data: "json, name=resourceConfiguration" })
  resourceConfiguration: ResourceConfiguration;

  @Metadata({ data: "json, name=variables", elemType: shared.Variable })
  variables?: Variable[];
}

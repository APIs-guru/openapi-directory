import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";



// DbClusterParameterGroupDetails
/** 
 * Represents the output of <a>DBClusterParameterGroup</a>.
**/
export class DbClusterParameterGroupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Parameter })
  parameters?: Parameter[];
}

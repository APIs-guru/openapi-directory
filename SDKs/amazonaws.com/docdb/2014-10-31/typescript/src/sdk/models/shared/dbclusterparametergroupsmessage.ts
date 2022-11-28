import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroup } from "./dbclusterparametergroup";



// DbClusterParameterGroupsMessage
/** 
 * Represents the output of <a>DBClusterParameterGroups</a>.
**/
export class DbClusterParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterParameterGroup })
  dbClusterParameterGroups?: DbClusterParameterGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}

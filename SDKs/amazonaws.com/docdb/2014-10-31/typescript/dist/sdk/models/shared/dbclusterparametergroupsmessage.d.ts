import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroup } from "./dbclusterparametergroup";
/**
 * Represents the output of <a>DBClusterParameterGroups</a>.
**/
export declare class DbClusterParameterGroupsMessage extends SpeakeasyBase {
    dbClusterParameterGroups?: DbClusterParameterGroup[];
    marker?: string;
}

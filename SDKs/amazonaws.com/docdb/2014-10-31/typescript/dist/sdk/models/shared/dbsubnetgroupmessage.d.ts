import { SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroup } from "./dbsubnetgroup";
/**
 * Represents the output of <a>DescribeDBSubnetGroups</a>.
**/
export declare class DbSubnetGroupMessage extends SpeakeasyBase {
    dbSubnetGroups?: DbSubnetGroup[];
    marker?: string;
}

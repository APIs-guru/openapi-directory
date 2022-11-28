import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroup } from "./dbsubnetgroup";



// DbSubnetGroupMessage
/** 
 * Represents the output of <a>DescribeDBSubnetGroups</a>.
**/
export class DbSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSubnetGroup })
  dbSubnetGroups?: DbSubnetGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}

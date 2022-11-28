import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterParameterGroup
/** 
 * Detailed information about a cluster parameter group. 
**/
export class DbClusterParameterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterParameterGroupArn?: string;

  @SpeakeasyMetadata()
  dbClusterParameterGroupName?: string;

  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  description?: string;
}

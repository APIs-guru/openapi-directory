import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceState } from "./instancestate";



// DescribeEndPointStateOutput
/** 
 * Contains the output for DescribeInstanceHealth.
**/
export class DescribeEndPointStateOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceState })
  instanceStates?: InstanceState[];
}

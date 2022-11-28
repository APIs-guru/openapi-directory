import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterGroupStatus
/** 
 * The status of a parameter group.
**/
export class ParameterGroupStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NodeIdsToReboot" })
  nodeIdsToReboot?: string[];

  @SpeakeasyMetadata({ data: "json, name=ParameterApplyStatus" })
  parameterApplyStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;
}

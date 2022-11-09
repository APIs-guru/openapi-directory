import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterGroupStatus
/** 
 * The status of a parameter group.
**/
export class ParameterGroupStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=NodeIdsToReboot" })
  nodeIdsToReboot?: string[];

  @Metadata({ data: "json, name=ParameterApplyStatus" })
  parameterApplyStatus?: string;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterGroup
/** 
 * A named set of parameters that are applied to all of the nodes in a DAX cluster.
**/
export class ParameterGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterGroup
/** 
 * A named set of parameters that are applied to all of the nodes in a DAX cluster.
**/
export class ParameterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;
}

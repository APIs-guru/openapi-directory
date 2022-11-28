import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeTypeEnum } from "./changetypeenum";
import { IsModifiableEnum } from "./ismodifiableenum";
import { NodeTypeSpecificValue } from "./nodetypespecificvalue";
import { ParameterTypeEnum } from "./parametertypeenum";



// Parameter
/** 
 * Describes an individual setting that controls some aspect of DAX behavior.
**/
export class Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedValues" })
  allowedValues?: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeType" })
  changeType?: ChangeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IsModifiable" })
  isModifiable?: IsModifiableEnum;

  @SpeakeasyMetadata({ data: "json, name=NodeTypeSpecificValues", elemType: NodeTypeSpecificValue })
  nodeTypeSpecificValues?: NodeTypeSpecificValue[];

  @SpeakeasyMetadata({ data: "json, name=ParameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterType" })
  parameterType?: ParameterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ParameterValue" })
  parameterValue?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;
}

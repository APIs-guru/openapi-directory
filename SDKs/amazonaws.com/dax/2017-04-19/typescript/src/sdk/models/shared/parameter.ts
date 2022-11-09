import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChangeTypeEnum } from "./changetypeenum";
import { IsModifiableEnum } from "./ismodifiableenum";
import { NodeTypeSpecificValue } from "./nodetypespecificvalue";
import { ParameterTypeEnum } from "./parametertypeenum";


// Parameter
/** 
 * Describes an individual setting that controls some aspect of DAX behavior.
**/
export class Parameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedValues" })
  allowedValues?: string;

  @Metadata({ data: "json, name=ChangeType" })
  changeType?: ChangeTypeEnum;

  @Metadata({ data: "json, name=DataType" })
  dataType?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IsModifiable" })
  isModifiable?: IsModifiableEnum;

  @Metadata({ data: "json, name=NodeTypeSpecificValues", elemType: shared.NodeTypeSpecificValue })
  nodeTypeSpecificValues?: NodeTypeSpecificValue[];

  @Metadata({ data: "json, name=ParameterName" })
  parameterName?: string;

  @Metadata({ data: "json, name=ParameterType" })
  parameterType?: ParameterTypeEnum;

  @Metadata({ data: "json, name=ParameterValue" })
  parameterValue?: string;

  @Metadata({ data: "json, name=Source" })
  source?: string;
}

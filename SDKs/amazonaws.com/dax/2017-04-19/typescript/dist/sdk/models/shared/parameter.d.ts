import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeTypeEnum } from "./changetypeenum";
import { IsModifiableEnum } from "./ismodifiableenum";
import { NodeTypeSpecificValue } from "./nodetypespecificvalue";
import { ParameterTypeEnum } from "./parametertypeenum";
/**
 * Describes an individual setting that controls some aspect of DAX behavior.
**/
export declare class Parameter extends SpeakeasyBase {
    allowedValues?: string;
    changeType?: ChangeTypeEnum;
    dataType?: string;
    description?: string;
    isModifiable?: IsModifiableEnum;
    nodeTypeSpecificValues?: NodeTypeSpecificValue[];
    parameterName?: string;
    parameterType?: ParameterTypeEnum;
    parameterValue?: string;
    source?: string;
}

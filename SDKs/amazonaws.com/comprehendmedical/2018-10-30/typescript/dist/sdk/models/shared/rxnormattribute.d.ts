import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RxNormTrait } from "./rxnormtrait";
import { RxNormAttributeTypeEnum } from "./rxnormattributetypeenum";
/**
 * The extracted attributes that relate to this entity. The attributes recognized by InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>, <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>.
**/
export declare class RxNormAttribute extends SpeakeasyBase {
    beginOffset?: number;
    endOffset?: number;
    id?: number;
    relationshipScore?: number;
    score?: number;
    text?: string;
    traits?: RxNormTrait[];
    type?: RxNormAttributeTypeEnum;
}

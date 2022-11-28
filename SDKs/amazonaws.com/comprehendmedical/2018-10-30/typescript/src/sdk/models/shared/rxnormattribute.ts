import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RxNormTrait } from "./rxnormtrait";
import { RxNormAttributeTypeEnum } from "./rxnormattributetypeenum";



// RxNormAttribute
/** 
 * The extracted attributes that relate to this entity. The attributes recognized by InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>, <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>.
**/
export class RxNormAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=RelationshipScore" })
  relationshipScore?: number;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=Traits", elemType: RxNormTrait })
  traits?: RxNormTrait[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: RxNormAttributeTypeEnum;
}

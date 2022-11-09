import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RxNormTrait } from "./rxnormtrait";
import { RxNormAttributeTypeEnum } from "./rxnormattributetypeenum";


// RxNormAttribute
/** 
 * The extracted attributes that relate to this entity. The attributes recognized by InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>, <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>.
**/
export class RxNormAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @Metadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=RelationshipScore" })
  relationshipScore?: number;

  @Metadata({ data: "json, name=Score" })
  score?: number;

  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=Traits", elemType: shared.RxNormTrait })
  traits?: RxNormTrait[];

  @Metadata({ data: "json, name=Type" })
  type?: RxNormAttributeTypeEnum;
}

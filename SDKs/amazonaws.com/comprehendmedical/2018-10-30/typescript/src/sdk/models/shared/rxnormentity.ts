import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RxNormAttribute } from "./rxnormattribute";
import { RxNormEntityCategoryEnum } from "./rxnormentitycategoryenum";
import { RxNormConcept } from "./rxnormconcept";
import { RxNormTrait } from "./rxnormtrait";
import { RxNormEntityTypeEnum } from "./rxnormentitytypeenum";



// RxNormEntity
/** 
 * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. 
**/
export class RxNormEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: RxNormAttribute })
  attributes?: RxNormAttribute[];

  @SpeakeasyMetadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: RxNormEntityCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=RxNormConcepts", elemType: RxNormConcept })
  rxNormConcepts?: RxNormConcept[];

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=Traits", elemType: RxNormTrait })
  traits?: RxNormTrait[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: RxNormEntityTypeEnum;
}

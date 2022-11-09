import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=Attributes", elemType: shared.RxNormAttribute })
  attributes?: RxNormAttribute[];

  @Metadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @Metadata({ data: "json, name=Category" })
  category?: RxNormEntityCategoryEnum;

  @Metadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=RxNormConcepts", elemType: shared.RxNormConcept })
  rxNormConcepts?: RxNormConcept[];

  @Metadata({ data: "json, name=Score" })
  score?: number;

  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=Traits", elemType: shared.RxNormTrait })
  traits?: RxNormTrait[];

  @Metadata({ data: "json, name=Type" })
  type?: RxNormEntityTypeEnum;
}

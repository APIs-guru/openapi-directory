import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Icd10CmAttribute } from "./icd10cmattribute";
import { Icd10CmEntityCategoryEnum } from "./icd10cmentitycategoryenum";
import { Icd10CmConcept } from "./icd10cmconcept";
import { Icd10CmTrait } from "./icd10cmtrait";
import { Icd10CmEntityTypeEnum } from "./icd10cmentitytypeenum";



// Icd10CmEntity
/** 
 * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. 
**/
export class Icd10CmEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: Icd10CmAttribute })
  attributes?: Icd10CmAttribute[];

  @SpeakeasyMetadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: Icd10CmEntityCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=ICD10CMConcepts", elemType: Icd10CmConcept })
  icd10CmConcepts?: Icd10CmConcept[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=Traits", elemType: Icd10CmTrait })
  traits?: Icd10CmTrait[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: Icd10CmEntityTypeEnum;
}

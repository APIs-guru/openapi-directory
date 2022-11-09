import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=Attributes", elemType: shared.Icd10CmAttribute })
  attributes?: Icd10CmAttribute[];

  @Metadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @Metadata({ data: "json, name=Category" })
  category?: Icd10CmEntityCategoryEnum;

  @Metadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @Metadata({ data: "json, name=ICD10CMConcepts", elemType: shared.Icd10CmConcept })
  icd10CmConcepts?: Icd10CmConcept[];

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Score" })
  score?: number;

  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=Traits", elemType: shared.Icd10CmTrait })
  traits?: Icd10CmTrait[];

  @Metadata({ data: "json, name=Type" })
  type?: Icd10CmEntityTypeEnum;
}

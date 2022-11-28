import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Icd10CmEntityTypeEnum } from "./icd10cmentitytypeenum";
import { Icd10CmRelationshipTypeEnum } from "./icd10cmrelationshiptypeenum";
import { Icd10CmTrait } from "./icd10cmtrait";
import { Icd10CmAttributeTypeEnum } from "./icd10cmattributetypeenum";



// Icd10CmAttribute
/** 
 * The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>.
**/
export class Icd10CmAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: Icd10CmEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=RelationshipScore" })
  relationshipScore?: number;

  @SpeakeasyMetadata({ data: "json, name=RelationshipType" })
  relationshipType?: Icd10CmRelationshipTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=Traits", elemType: Icd10CmTrait })
  traits?: Icd10CmTrait[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: Icd10CmAttributeTypeEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Icd10CmEntityTypeEnum } from "./icd10cmentitytypeenum";
import { Icd10CmRelationshipTypeEnum } from "./icd10cmrelationshiptypeenum";
import { Icd10CmTrait } from "./icd10cmtrait";
import { Icd10CmAttributeTypeEnum } from "./icd10cmattributetypeenum";


// Icd10CmAttribute
/** 
 * The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>.
**/
export class Icd10CmAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @Metadata({ data: "json, name=Category" })
  category?: Icd10CmEntityTypeEnum;

  @Metadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=RelationshipScore" })
  relationshipScore?: number;

  @Metadata({ data: "json, name=RelationshipType" })
  relationshipType?: Icd10CmRelationshipTypeEnum;

  @Metadata({ data: "json, name=Score" })
  score?: number;

  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=Traits", elemType: shared.Icd10CmTrait })
  traits?: Icd10CmTrait[];

  @Metadata({ data: "json, name=Type" })
  type?: Icd10CmAttributeTypeEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityTypeEnum } from "./entitytypeenum";
import { RelationshipTypeEnum } from "./relationshiptypeenum";
import { Trait } from "./trait";
import { EntitySubTypeEnum } from "./entitysubtypeenum";


// Attribute
/** 
 *  An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text. 
**/
export class Attribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @Metadata({ data: "json, name=Category" })
  category?: EntityTypeEnum;

  @Metadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=RelationshipScore" })
  relationshipScore?: number;

  @Metadata({ data: "json, name=RelationshipType" })
  relationshipType?: RelationshipTypeEnum;

  @Metadata({ data: "json, name=Score" })
  score?: number;

  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=Traits", elemType: shared.Trait })
  traits?: Trait[];

  @Metadata({ data: "json, name=Type" })
  type?: EntitySubTypeEnum;
}

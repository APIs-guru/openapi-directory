import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { RelationshipTypeEnum } from "./relationshiptypeenum";
import { Trait } from "./trait";
import { EntitySubTypeEnum } from "./entitysubtypeenum";



// Attribute
/** 
 *  An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text. 
**/
export class Attribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=RelationshipScore" })
  relationshipScore?: number;

  @SpeakeasyMetadata({ data: "json, name=RelationshipType" })
  relationshipType?: RelationshipTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=Traits", elemType: Trait })
  traits?: Trait[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: EntitySubTypeEnum;
}

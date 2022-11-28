import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { EntityTypeEnum } from "./entitytypeenum";
import { Trait } from "./trait";
import { EntitySubTypeEnum } from "./entitysubtypeenum";



// Entity
/** 
 *  Provides information about an extracted medical entity.
**/
export class Entity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=Traits", elemType: Trait })
  traits?: Trait[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: EntitySubTypeEnum;
}

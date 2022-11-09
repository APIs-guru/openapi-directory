import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";
import { EntityTypeEnum } from "./entitytypeenum";
import { Trait } from "./trait";
import { EntitySubTypeEnum } from "./entitysubtypeenum";


// Entity
/** 
 *  Provides information about an extracted medical entity.
**/
export class Entity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.Attribute })
  attributes?: Attribute[];

  @Metadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @Metadata({ data: "json, name=Category" })
  category?: EntityTypeEnum;

  @Metadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Score" })
  score?: number;

  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=Traits", elemType: shared.Trait })
  traits?: Trait[];

  @Metadata({ data: "json, name=Type" })
  type?: EntitySubTypeEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";



// Entity
/** 
 * <p>Provides information about an entity. </p> <p> </p>
**/
export class Entity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: EntityTypeEnum;
}

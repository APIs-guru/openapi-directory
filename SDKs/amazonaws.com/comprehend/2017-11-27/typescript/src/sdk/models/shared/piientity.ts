import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PiiEntityTypeEnum } from "./piientitytypeenum";



// PiiEntity
/** 
 * Provides information about a PII entity.
**/
export class PiiEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: PiiEntityTypeEnum;
}

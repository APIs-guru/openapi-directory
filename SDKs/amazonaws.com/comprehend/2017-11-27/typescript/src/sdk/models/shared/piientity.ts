import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PiiEntityTypeEnum } from "./piientitytypeenum";


// PiiEntity
/** 
 * Provides information about a PII entity.
**/
export class PiiEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @Metadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @Metadata({ data: "json, name=Score" })
  score?: number;

  @Metadata({ data: "json, name=Type" })
  type?: PiiEntityTypeEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PiiEntityTypeEnum } from "./piientitytypeenum";



// EntityLabel
/** 
 * Specifies one of the label or labels that categorize the personally identifiable information (PII) entity being analyzed.
**/
export class EntityLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: PiiEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;
}

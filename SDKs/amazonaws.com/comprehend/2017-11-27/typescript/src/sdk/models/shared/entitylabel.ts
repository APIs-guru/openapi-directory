import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PiiEntityTypeEnum } from "./piientitytypeenum";


// EntityLabel
/** 
 * Specifies one of the label or labels that categorize the personally identifiable information (PII) entity being analyzed.
**/
export class EntityLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: PiiEntityTypeEnum;

  @Metadata({ data: "json, name=Score" })
  score?: number;
}

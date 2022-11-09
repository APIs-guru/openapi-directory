import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PiiEntitiesDetectionMaskModeEnum } from "./piientitiesdetectionmaskmodeenum";
import { PiiEntityTypeEnum } from "./piientitytypeenum";


// RedactionConfig
/** 
 * Provides configuration parameters for PII entity redaction.
**/
export class RedactionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaskCharacter" })
  maskCharacter?: string;

  @Metadata({ data: "json, name=MaskMode" })
  maskMode?: PiiEntitiesDetectionMaskModeEnum;

  @Metadata({ data: "json, name=PiiEntityTypes" })
  piiEntityTypes?: PiiEntityTypeEnum[];
}

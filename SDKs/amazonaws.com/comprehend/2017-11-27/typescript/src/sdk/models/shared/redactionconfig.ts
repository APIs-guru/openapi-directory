import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PiiEntitiesDetectionMaskModeEnum } from "./piientitiesdetectionmaskmodeenum";
import { PiiEntityTypeEnum } from "./piientitytypeenum";



// RedactionConfig
/** 
 * Provides configuration parameters for PII entity redaction.
**/
export class RedactionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaskCharacter" })
  maskCharacter?: string;

  @SpeakeasyMetadata({ data: "json, name=MaskMode" })
  maskMode?: PiiEntitiesDetectionMaskModeEnum;

  @SpeakeasyMetadata({ data: "json, name=PiiEntityTypes" })
  piiEntityTypes?: PiiEntityTypeEnum[];
}

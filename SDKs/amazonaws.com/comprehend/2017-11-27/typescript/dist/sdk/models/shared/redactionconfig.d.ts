import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PiiEntitiesDetectionMaskModeEnum } from "./piientitiesdetectionmaskmodeenum";
import { PiiEntityTypeEnum } from "./piientitytypeenum";
/**
 * Provides configuration parameters for PII entity redaction.
**/
export declare class RedactionConfig extends SpeakeasyBase {
    maskCharacter?: string;
    maskMode?: PiiEntitiesDetectionMaskModeEnum;
    piiEntityTypes?: PiiEntityTypeEnum[];
}

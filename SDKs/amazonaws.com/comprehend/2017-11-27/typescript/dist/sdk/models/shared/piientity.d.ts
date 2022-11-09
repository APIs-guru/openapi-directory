import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PiiEntityTypeEnum } from "./piientitytypeenum";
/**
 * Provides information about a PII entity.
**/
export declare class PiiEntity extends SpeakeasyBase {
    beginOffset?: number;
    endOffset?: number;
    score?: number;
    type?: PiiEntityTypeEnum;
}

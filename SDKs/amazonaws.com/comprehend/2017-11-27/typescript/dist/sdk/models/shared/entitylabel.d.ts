import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PiiEntityTypeEnum } from "./piientitytypeenum";
/**
 * Specifies one of the label or labels that categorize the personally identifiable information (PII) entity being analyzed.
**/
export declare class EntityLabel extends SpeakeasyBase {
    name?: PiiEntityTypeEnum;
    score?: number;
}

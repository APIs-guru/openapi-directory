import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Attribute } from "./attribute";
import { FindingSeverityEnum } from "./findingseverityenum";
/**
 * Contains information about an image scan finding.
**/
export declare class ImageScanFinding extends SpeakeasyBase {
    attributes?: Attribute[];
    description?: string;
    name?: string;
    severity?: FindingSeverityEnum;
    uri?: string;
}

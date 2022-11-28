import { SpeakeasyBase } from "../../../internal/utils";
import { SourceFrequencyEnum } from "./sourcefrequencyenum";
import { SourceKeyword } from "./sourcekeyword";
import { SourceSetUpOptionEnum } from "./sourcesetupoptionenum";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 *  The data source that determines from where Audit Manager collects evidence for the control.
**/
export declare class ControlMappingSource extends SpeakeasyBase {
    sourceDescription?: string;
    sourceFrequency?: SourceFrequencyEnum;
    sourceId?: string;
    sourceKeyword?: SourceKeyword;
    sourceName?: string;
    sourceSetUpOption?: SourceSetUpOptionEnum;
    sourceType?: SourceTypeEnum;
    troubleshootingText?: string;
}

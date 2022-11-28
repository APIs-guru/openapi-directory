import { SpeakeasyBase } from "../../../internal/utils";
import { SourceFrequencyEnum } from "./sourcefrequencyenum";
import { SourceKeyword } from "./sourcekeyword";
import { SourceSetUpOptionEnum } from "./sourcesetupoptionenum";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 *  Control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This does not contain <code>mappingID</code>.
**/
export declare class CreateControlMappingSource extends SpeakeasyBase {
    sourceDescription?: string;
    sourceFrequency?: SourceFrequencyEnum;
    sourceKeyword?: SourceKeyword;
    sourceName?: string;
    sourceSetUpOption?: SourceSetUpOptionEnum;
    sourceType?: SourceTypeEnum;
    troubleshootingText?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * <p/>
**/
export declare class DescribeEventsMessage extends SpeakeasyBase {
    duration?: number;
    endTime?: Date;
    eventCategories?: string[];
    filters?: Filter[];
    marker?: string;
    maxRecords?: number;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
    startTime?: Date;
}

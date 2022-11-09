import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
export declare class DescribeEventsRequest extends SpeakeasyBase {
    duration?: number;
    endTime?: Date;
    maxResults?: number;
    nextToken?: string;
    sourceName?: string;
    sourceType?: SourceTypeEnum;
    startTime?: Date;
}

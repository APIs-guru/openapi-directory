import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Detailed information about an event.
**/
export declare class Event extends SpeakeasyBase {
    date?: Date;
    eventCategories?: string[];
    message?: string;
    sourceArn?: string;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
}

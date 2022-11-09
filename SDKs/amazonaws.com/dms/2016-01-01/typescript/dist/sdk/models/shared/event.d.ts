import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the DMS resource type.
**/
export declare class Event extends SpeakeasyBase {
    date?: Date;
    eventCategories?: string[];
    message?: string;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
}

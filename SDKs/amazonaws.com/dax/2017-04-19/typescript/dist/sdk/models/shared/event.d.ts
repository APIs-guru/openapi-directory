import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Represents a single occurrence of something interesting within the system. Some examples of events are creating a DAX cluster, adding or removing a node, or rebooting a node.
**/
export declare class Event extends SpeakeasyBase {
    date?: Date;
    message?: string;
    sourceName?: string;
    sourceType?: SourceTypeEnum;
}

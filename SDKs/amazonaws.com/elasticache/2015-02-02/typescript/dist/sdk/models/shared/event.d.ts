import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.
**/
export declare class Event extends SpeakeasyBase {
    date?: Date;
    message?: string;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
}

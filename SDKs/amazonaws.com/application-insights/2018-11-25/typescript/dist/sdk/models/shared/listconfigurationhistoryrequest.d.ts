import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationEventStatusEnum } from "./configurationeventstatusenum";
export declare class ListConfigurationHistoryRequest extends SpeakeasyBase {
    endTime?: Date;
    eventStatus?: ConfigurationEventStatusEnum;
    maxResults?: number;
    nextToken?: string;
    resourceGroupName?: string;
    startTime?: Date;
}

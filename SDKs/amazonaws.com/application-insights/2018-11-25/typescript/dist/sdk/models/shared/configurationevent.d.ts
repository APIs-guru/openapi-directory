import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationEventResourceTypeEnum } from "./configurationeventresourcetypeenum";
import { ConfigurationEventStatusEnum } from "./configurationeventstatusenum";
/**
 *  The event information.
**/
export declare class ConfigurationEvent extends SpeakeasyBase {
    eventDetail?: string;
    eventResourceName?: string;
    eventResourceType?: ConfigurationEventResourceTypeEnum;
    eventStatus?: ConfigurationEventStatusEnum;
    eventTime?: Date;
    monitoredResourceArn?: string;
}

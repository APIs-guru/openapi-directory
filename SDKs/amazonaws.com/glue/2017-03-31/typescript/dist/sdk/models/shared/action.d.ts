import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationProperty } from "./notificationproperty";
/**
 * Defines an action to be initiated by a trigger.
**/
export declare class Action extends SpeakeasyBase {
    arguments?: Map<string, string>;
    crawlerName?: string;
    jobName?: string;
    notificationProperty?: NotificationProperty;
    securityConfiguration?: string;
    timeout?: number;
}

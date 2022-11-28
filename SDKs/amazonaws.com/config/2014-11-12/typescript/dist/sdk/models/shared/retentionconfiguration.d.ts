import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config.
**/
export declare class RetentionConfiguration extends SpeakeasyBase {
    name: string;
    retentionPeriodInDays: number;
}

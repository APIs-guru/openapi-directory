import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationResourceLifecycleConfig } from "./applicationresourcelifecycleconfig";
/**
 * Describes the properties of an application.
**/
export declare class ApplicationDescription extends SpeakeasyBase {
    applicationArn?: string;
    applicationName?: string;
    configurationTemplates?: string[];
    dateCreated?: Date;
    dateUpdated?: Date;
    description?: string;
    resourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
    versions?: string[];
}

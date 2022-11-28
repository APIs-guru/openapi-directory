import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationVersionLifecycleConfig } from "./applicationversionlifecycleconfig";
/**
 * The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.
**/
export declare class ApplicationResourceLifecycleConfig extends SpeakeasyBase {
    serviceRole?: string;
    versionLifecycleConfig?: ApplicationVersionLifecycleConfig;
}

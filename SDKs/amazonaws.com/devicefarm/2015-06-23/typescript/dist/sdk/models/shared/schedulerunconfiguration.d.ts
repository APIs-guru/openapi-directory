import { SpeakeasyBase } from "../../../internal/utils";
import { BillingMethodEnum } from "./billingmethodenum";
import { CustomerArtifactPaths } from "./customerartifactpaths";
import { Location } from "./location";
import { Radios } from "./radios";
/**
 * Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.
**/
export declare class ScheduleRunConfiguration extends SpeakeasyBase {
    auxiliaryApps?: string[];
    billingMethod?: BillingMethodEnum;
    customerArtifactPaths?: CustomerArtifactPaths;
    extraDataPackageArn?: string;
    locale?: string;
    location?: Location;
    networkProfileArn?: string;
    radios?: Radios;
    vpceConfigurationArns?: string[];
}

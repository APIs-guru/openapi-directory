import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingMethodEnum } from "./billingmethodenum";
import { CustomerArtifactPaths } from "./customerartifactpaths";
import { Location } from "./location";
import { Radios } from "./radios";


// ScheduleRunConfiguration
/** 
 * Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.
**/
export class ScheduleRunConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=auxiliaryApps" })
  auxiliaryApps?: string[];

  @Metadata({ data: "json, name=billingMethod" })
  billingMethod?: BillingMethodEnum;

  @Metadata({ data: "json, name=customerArtifactPaths" })
  customerArtifactPaths?: CustomerArtifactPaths;

  @Metadata({ data: "json, name=extraDataPackageArn" })
  extraDataPackageArn?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=networkProfileArn" })
  networkProfileArn?: string;

  @Metadata({ data: "json, name=radios" })
  radios?: Radios;

  @Metadata({ data: "json, name=vpceConfigurationArns" })
  vpceConfigurationArns?: string[];
}

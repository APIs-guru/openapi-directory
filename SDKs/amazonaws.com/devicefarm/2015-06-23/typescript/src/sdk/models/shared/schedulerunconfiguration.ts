import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingMethodEnum } from "./billingmethodenum";
import { CustomerArtifactPaths } from "./customerartifactpaths";
import { Location } from "./location";
import { Radios } from "./radios";



// ScheduleRunConfiguration
/** 
 * Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.
**/
export class ScheduleRunConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auxiliaryApps" })
  auxiliaryApps?: string[];

  @SpeakeasyMetadata({ data: "json, name=billingMethod" })
  billingMethod?: BillingMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=customerArtifactPaths" })
  customerArtifactPaths?: CustomerArtifactPaths;

  @SpeakeasyMetadata({ data: "json, name=extraDataPackageArn" })
  extraDataPackageArn?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=networkProfileArn" })
  networkProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=radios" })
  radios?: Radios;

  @SpeakeasyMetadata({ data: "json, name=vpceConfigurationArns" })
  vpceConfigurationArns?: string[];
}

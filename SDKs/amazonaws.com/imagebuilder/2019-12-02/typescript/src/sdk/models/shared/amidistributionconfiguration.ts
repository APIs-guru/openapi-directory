import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchPermissionConfiguration } from "./launchpermissionconfiguration";



// AmiDistributionConfiguration
/** 
 *  Define and configure the output AMIs of the pipeline.
**/
export class AmiDistributionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amiTags" })
  amiTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=launchPermission" })
  launchPermission?: LaunchPermissionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=targetAccountIds" })
  targetAccountIds?: string[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchPermissionConfiguration } from "./launchpermissionconfiguration";


// AmiDistributionConfiguration
/** 
 *  Define and configure the output AMIs of the pipeline.
**/
export class AmiDistributionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=amiTags" })
  amiTags?: Map<string, string>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=launchPermission" })
  launchPermission?: LaunchPermissionConfiguration;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=targetAccountIds" })
  targetAccountIds?: string[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Configuration
/** 
 * <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p>
**/
export class Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration })
  configurations?: Configuration[];

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;
}

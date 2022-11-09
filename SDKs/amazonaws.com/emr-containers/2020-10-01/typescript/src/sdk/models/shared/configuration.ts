import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Configuration } from "./configuration";


// Configuration
/** 
 * A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.
**/
export class Configuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification: string;

  @Metadata({ data: "json, name=configurations", elemType: shared.Configuration })
  configurations?: Configuration[];

  @Metadata({ data: "json, name=properties" })
  properties?: any;
}

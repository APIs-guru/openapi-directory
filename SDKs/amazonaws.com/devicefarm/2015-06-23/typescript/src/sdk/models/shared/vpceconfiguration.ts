import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpceConfiguration
/** 
 * Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.
**/
export class VpceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=serviceDnsName" })
  serviceDnsName?: string;

  @Metadata({ data: "json, name=vpceConfigurationDescription" })
  vpceConfigurationDescription?: string;

  @Metadata({ data: "json, name=vpceConfigurationName" })
  vpceConfigurationName?: string;

  @Metadata({ data: "json, name=vpceServiceName" })
  vpceServiceName?: string;
}

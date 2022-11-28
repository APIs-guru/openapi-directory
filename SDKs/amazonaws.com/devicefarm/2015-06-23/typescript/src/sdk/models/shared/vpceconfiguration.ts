import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpceConfiguration
/** 
 * Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.
**/
export class VpceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDnsName" })
  serviceDnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=vpceConfigurationDescription" })
  vpceConfigurationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=vpceConfigurationName" })
  vpceConfigurationName?: string;

  @SpeakeasyMetadata({ data: "json, name=vpceServiceName" })
  vpceServiceName?: string;
}

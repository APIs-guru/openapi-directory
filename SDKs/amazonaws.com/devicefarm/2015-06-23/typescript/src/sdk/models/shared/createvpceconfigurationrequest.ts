import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateVpceConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceDnsName" })
  serviceDnsName: string;

  @SpeakeasyMetadata({ data: "json, name=vpceConfigurationDescription" })
  vpceConfigurationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=vpceConfigurationName" })
  vpceConfigurationName: string;

  @SpeakeasyMetadata({ data: "json, name=vpceServiceName" })
  vpceServiceName: string;
}

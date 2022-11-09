import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateVpceConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceDnsName" })
  serviceDnsName: string;

  @Metadata({ data: "json, name=vpceConfigurationDescription" })
  vpceConfigurationDescription?: string;

  @Metadata({ data: "json, name=vpceConfigurationName" })
  vpceConfigurationName: string;

  @Metadata({ data: "json, name=vpceServiceName" })
  vpceServiceName: string;
}

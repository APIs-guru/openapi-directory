import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDomainConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainConfigurationArn" })
  domainConfigurationArn?: string;

  @Metadata({ data: "json, name=domainConfigurationName" })
  domainConfigurationName?: string;
}

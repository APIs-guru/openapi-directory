import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDomainConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainConfigurationArn" })
  domainConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=domainConfigurationName" })
  domainConfigurationName?: string;
}

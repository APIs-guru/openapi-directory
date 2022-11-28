import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRemediationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}

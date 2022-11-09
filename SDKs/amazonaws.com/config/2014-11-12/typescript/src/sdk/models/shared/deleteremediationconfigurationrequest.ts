import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRemediationConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}

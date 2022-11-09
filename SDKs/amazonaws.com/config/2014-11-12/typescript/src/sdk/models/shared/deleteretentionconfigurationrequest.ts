import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRetentionConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RetentionConfigurationName" })
  retentionConfigurationName: string;
}

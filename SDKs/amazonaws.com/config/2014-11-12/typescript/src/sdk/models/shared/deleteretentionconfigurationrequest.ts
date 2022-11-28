import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRetentionConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RetentionConfigurationName" })
  retentionConfigurationName: string;
}

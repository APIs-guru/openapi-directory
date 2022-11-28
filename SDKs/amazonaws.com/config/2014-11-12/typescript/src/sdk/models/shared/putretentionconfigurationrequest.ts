import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRetentionConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RetentionPeriodInDays" })
  retentionPeriodInDays: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRetentionConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RetentionPeriodInDays" })
  retentionPeriodInDays: number;
}

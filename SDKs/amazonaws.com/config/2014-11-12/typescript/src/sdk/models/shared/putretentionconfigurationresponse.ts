import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionConfiguration } from "./retentionconfiguration";


export class PutRetentionConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RetentionConfiguration" })
  retentionConfiguration?: RetentionConfiguration;
}

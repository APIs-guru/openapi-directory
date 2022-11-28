import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionConfiguration } from "./retentionconfiguration";



export class PutRetentionConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RetentionConfiguration" })
  retentionConfiguration?: RetentionConfiguration;
}

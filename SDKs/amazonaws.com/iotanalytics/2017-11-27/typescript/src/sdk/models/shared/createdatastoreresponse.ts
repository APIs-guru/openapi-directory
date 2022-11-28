import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionPeriod } from "./retentionperiod";



export class CreateDatastoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datastoreArn" })
  datastoreArn?: string;

  @SpeakeasyMetadata({ data: "json, name=datastoreName" })
  datastoreName?: string;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: RetentionPeriod;
}

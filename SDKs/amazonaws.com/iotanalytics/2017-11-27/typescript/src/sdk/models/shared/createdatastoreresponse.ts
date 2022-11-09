import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionPeriod } from "./retentionperiod";


export class CreateDatastoreResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datastoreArn" })
  datastoreArn?: string;

  @Metadata({ data: "json, name=datastoreName" })
  datastoreName?: string;

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: RetentionPeriod;
}

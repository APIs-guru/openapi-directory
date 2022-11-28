import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionPeriod } from "./retentionperiod";
export declare class CreateDatastoreResponse extends SpeakeasyBase {
    datastoreArn?: string;
    datastoreName?: string;
    retentionPeriod?: RetentionPeriod;
}

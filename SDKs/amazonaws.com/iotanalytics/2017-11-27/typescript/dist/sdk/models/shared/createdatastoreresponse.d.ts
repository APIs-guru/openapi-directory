import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionPeriod } from "./retentionperiod";
export declare class CreateDatastoreResponse extends SpeakeasyBase {
    datastoreArn?: string;
    datastoreName?: string;
    retentionPeriod?: RetentionPeriod;
}

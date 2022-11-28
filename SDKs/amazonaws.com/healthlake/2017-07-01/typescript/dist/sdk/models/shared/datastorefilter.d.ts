import { SpeakeasyBase } from "../../../internal/utils";
import { DatastoreStatusEnum } from "./datastorestatusenum";
/**
 * The filters applied to Data Store query.
**/
export declare class DatastoreFilter extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    datastoreName?: string;
    datastoreStatus?: DatastoreStatusEnum;
}

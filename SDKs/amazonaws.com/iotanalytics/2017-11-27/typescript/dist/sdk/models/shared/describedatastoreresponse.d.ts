import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Datastore } from "./datastore";
import { DatastoreStatistics } from "./datastorestatistics";
export declare class DescribeDatastoreResponse extends SpeakeasyBase {
    datastore?: Datastore;
    statistics?: DatastoreStatistics;
}

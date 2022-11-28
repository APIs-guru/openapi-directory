import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Datastore } from "./datastore";
import { DatastoreStatistics } from "./datastorestatistics";



export class DescribeDatastoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datastore" })
  datastore?: Datastore;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: DatastoreStatistics;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Datastore } from "./datastore";
import { DatastoreStatistics } from "./datastorestatistics";


export class DescribeDatastoreResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datastore" })
  datastore?: Datastore;

  @Metadata({ data: "json, name=statistics" })
  statistics?: DatastoreStatistics;
}

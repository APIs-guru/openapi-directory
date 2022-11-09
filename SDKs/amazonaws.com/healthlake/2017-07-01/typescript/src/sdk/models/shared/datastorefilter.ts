import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatastoreStatusEnum } from "./datastorestatusenum";


// DatastoreFilter
/** 
 * The filters applied to Data Store query.
**/
export class DatastoreFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=DatastoreName" })
  datastoreName?: string;

  @Metadata({ data: "json, name=DatastoreStatus" })
  datastoreStatus?: DatastoreStatusEnum;
}

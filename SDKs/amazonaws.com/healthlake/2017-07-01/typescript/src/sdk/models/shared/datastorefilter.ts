import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatastoreStatusEnum } from "./datastorestatusenum";



// DatastoreFilter
/** 
 * The filters applied to Data Store query.
**/
export class DatastoreFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatastoreName" })
  datastoreName?: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreStatus" })
  datastoreStatus?: DatastoreStatusEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchemaAttribute } from "./schemaattribute";


// Schema
/** 
 * Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request.
**/
export class Schema extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.SchemaAttribute })
  attributes?: SchemaAttribute[];
}

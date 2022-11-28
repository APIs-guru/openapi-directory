import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaAttribute } from "./schemaattribute";



// Schema
/** 
 * Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request.
**/
export class Schema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: SchemaAttribute })
  attributes?: SchemaAttribute[];
}

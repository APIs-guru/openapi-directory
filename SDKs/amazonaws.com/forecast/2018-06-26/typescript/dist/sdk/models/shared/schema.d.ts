import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaAttribute } from "./schemaattribute";
/**
 * Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request.
**/
export declare class Schema extends SpeakeasyBase {
    attributes?: SchemaAttribute[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchemaColumn
/** 
 * A key-value pair representing a column and data type that this transform can run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.
**/
export class SchemaColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

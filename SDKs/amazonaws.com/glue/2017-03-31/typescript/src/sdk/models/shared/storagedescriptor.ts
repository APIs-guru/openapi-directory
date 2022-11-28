import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";
import { SchemaReference } from "./schemareference";
import { SerDeInfo } from "./serdeinfo";
import { SkewedInfo } from "./skewedinfo";
import { Order } from "./order";



// StorageDescriptor
/** 
 * Describes the physical storage of table data.
**/
export class StorageDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketColumns" })
  bucketColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=Columns", elemType: Column })
  columns?: Column[];

  @SpeakeasyMetadata({ data: "json, name=Compressed" })
  compressed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InputFormat" })
  inputFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfBuckets" })
  numberOfBuckets?: number;

  @SpeakeasyMetadata({ data: "json, name=OutputFormat" })
  outputFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=SchemaReference" })
  schemaReference?: SchemaReference;

  @SpeakeasyMetadata({ data: "json, name=SerdeInfo" })
  serdeInfo?: SerDeInfo;

  @SpeakeasyMetadata({ data: "json, name=SkewedInfo" })
  skewedInfo?: SkewedInfo;

  @SpeakeasyMetadata({ data: "json, name=SortColumns", elemType: Order })
  sortColumns?: Order[];

  @SpeakeasyMetadata({ data: "json, name=StoredAsSubDirectories" })
  storedAsSubDirectories?: boolean;
}

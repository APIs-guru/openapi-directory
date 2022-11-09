import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=BucketColumns" })
  bucketColumns?: string[];

  @Metadata({ data: "json, name=Columns", elemType: shared.Column })
  columns?: Column[];

  @Metadata({ data: "json, name=Compressed" })
  compressed?: boolean;

  @Metadata({ data: "json, name=InputFormat" })
  inputFormat?: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=NumberOfBuckets" })
  numberOfBuckets?: number;

  @Metadata({ data: "json, name=OutputFormat" })
  outputFormat?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=SchemaReference" })
  schemaReference?: SchemaReference;

  @Metadata({ data: "json, name=SerdeInfo" })
  serdeInfo?: SerDeInfo;

  @Metadata({ data: "json, name=SkewedInfo" })
  skewedInfo?: SkewedInfo;

  @Metadata({ data: "json, name=SortColumns", elemType: shared.Order })
  sortColumns?: Order[];

  @Metadata({ data: "json, name=StoredAsSubDirectories" })
  storedAsSubDirectories?: boolean;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MongoDbTarget
/** 
 * Specifies an Amazon DocumentDB or MongoDB data store to crawl.
**/
export class MongoDbTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=ScanAll" })
  scanAll?: boolean;
}

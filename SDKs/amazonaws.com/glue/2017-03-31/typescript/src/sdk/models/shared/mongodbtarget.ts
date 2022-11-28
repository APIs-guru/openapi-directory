import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MongoDbTarget
/** 
 * Specifies an Amazon DocumentDB or MongoDB data store to crawl.
**/
export class MongoDbTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=ScanAll" })
  scanAll?: boolean;
}

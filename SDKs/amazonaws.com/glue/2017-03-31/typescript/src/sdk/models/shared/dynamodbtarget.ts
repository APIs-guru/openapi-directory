import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DynamoDbTarget
/** 
 * Specifies an Amazon DynamoDB table to crawl.
**/
export class DynamoDbTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=scanAll" })
  scanAll?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scanRate" })
  scanRate?: number;
}

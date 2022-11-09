import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DynamoDbTarget
/** 
 * Specifies an Amazon DynamoDB table to crawl.
**/
export class DynamoDbTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=scanAll" })
  scanAll?: boolean;

  @Metadata({ data: "json, name=scanRate" })
  scanRate?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";



// DescribeBackupsRequest
/** 
 * The request object for <code>DescribeBackups</code> operation.
**/
export class DescribeBackupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupIds" })
  backupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: Filter })
  filters?: Filter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

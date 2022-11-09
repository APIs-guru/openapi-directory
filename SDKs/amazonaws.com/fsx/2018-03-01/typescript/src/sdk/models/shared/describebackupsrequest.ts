import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";


// DescribeBackupsRequest
/** 
 * The request object for <code>DescribeBackups</code> operation.
**/
export class DescribeBackupsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupIds" })
  backupIds?: string[];

  @Metadata({ data: "json, name=Filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

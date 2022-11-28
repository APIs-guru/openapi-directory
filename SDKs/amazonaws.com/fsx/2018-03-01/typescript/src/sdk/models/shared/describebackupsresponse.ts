import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";



// DescribeBackupsResponse
/** 
 * Response object for <code>DescribeBackups</code> operation.
**/
export class DescribeBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Backups", elemType: Backup })
  backups?: Backup[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

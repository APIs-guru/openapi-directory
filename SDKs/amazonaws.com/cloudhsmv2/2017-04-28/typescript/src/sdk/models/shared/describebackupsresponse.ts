import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";



export class DescribeBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Backups", elemType: Backup })
  backups?: Backup[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Backup } from "./backup";


export class DescribeBackupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Backups", elemType: shared.Backup })
  backups?: Backup[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

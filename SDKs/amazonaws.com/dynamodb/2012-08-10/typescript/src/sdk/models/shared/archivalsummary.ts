import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ArchivalSummary
/** 
 * Contains details of a table archival operation.
**/
export class ArchivalSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArchivalBackupArn" })
  archivalBackupArn?: string;

  @Metadata({ data: "json, name=ArchivalDateTime" })
  archivalDateTime?: Date;

  @Metadata({ data: "json, name=ArchivalReason" })
  archivalReason?: string;
}

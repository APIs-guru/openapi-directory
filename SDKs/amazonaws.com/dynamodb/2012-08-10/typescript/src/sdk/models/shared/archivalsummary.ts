import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ArchivalSummary
/** 
 * Contains details of a table archival operation.
**/
export class ArchivalSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArchivalBackupArn" })
  archivalBackupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ArchivalDateTime" })
  archivalDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ArchivalReason" })
  archivalReason?: string;
}

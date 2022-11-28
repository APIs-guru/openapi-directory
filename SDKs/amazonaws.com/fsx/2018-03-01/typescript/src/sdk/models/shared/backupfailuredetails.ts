import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackupFailureDetails
/** 
 * If backup creation fails, this structure contains the details of that failure.
**/
export class BackupFailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}

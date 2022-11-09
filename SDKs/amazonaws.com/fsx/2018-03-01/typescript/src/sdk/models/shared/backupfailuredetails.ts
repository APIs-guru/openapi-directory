import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BackupFailureDetails
/** 
 * If backup creation fails, this structure contains the details of that failure.
**/
export class BackupFailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetCsvHeaderRequest
/** 
 * Represents the request to get the header information for the .csv file for the user import job.
**/
export class GetCsvHeaderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}

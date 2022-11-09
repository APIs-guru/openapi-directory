import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetCsvHeaderRequest
/** 
 * Represents the request to get the header information for the .csv file for the user import job.
**/
export class GetCsvHeaderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}

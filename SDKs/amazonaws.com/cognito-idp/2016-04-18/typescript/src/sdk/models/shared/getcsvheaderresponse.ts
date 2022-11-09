import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetCsvHeaderResponse
/** 
 * Represents the response from the server to the request to get the header information for the .csv file for the user import job.
**/
export class GetCsvHeaderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CSVHeader" })
  csvHeader?: string[];

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;
}

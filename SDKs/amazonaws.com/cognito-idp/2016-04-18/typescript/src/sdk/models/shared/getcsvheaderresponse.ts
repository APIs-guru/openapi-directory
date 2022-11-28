import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetCsvHeaderResponse
/** 
 * Represents the response from the server to the request to get the header information for the .csv file for the user import job.
**/
export class GetCsvHeaderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CSVHeader" })
  csvHeader?: string[];

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;
}

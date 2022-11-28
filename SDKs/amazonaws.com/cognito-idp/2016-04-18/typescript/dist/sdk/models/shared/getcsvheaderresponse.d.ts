import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the response from the server to the request to get the header information for the .csv file for the user import job.
**/
export declare class GetCsvHeaderResponse extends SpeakeasyBase {
    csvHeader?: string[];
    userPoolId?: string;
}

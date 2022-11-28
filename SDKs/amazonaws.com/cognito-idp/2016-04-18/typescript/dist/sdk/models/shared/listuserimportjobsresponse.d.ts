import { SpeakeasyBase } from "../../../internal/utils";
import { UserImportJobType } from "./userimportjobtype";
/**
 * Represents the response from the server to the request to list the user import jobs.
**/
export declare class ListUserImportJobsResponse extends SpeakeasyBase {
    paginationToken?: string;
    userImportJobs?: UserImportJobType[];
}

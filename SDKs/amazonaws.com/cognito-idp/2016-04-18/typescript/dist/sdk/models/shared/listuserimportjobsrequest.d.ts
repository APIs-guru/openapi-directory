import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to list the user import jobs.
**/
export declare class ListUserImportJobsRequest extends SpeakeasyBase {
    maxResults: number;
    paginationToken?: string;
    userPoolId: string;
}

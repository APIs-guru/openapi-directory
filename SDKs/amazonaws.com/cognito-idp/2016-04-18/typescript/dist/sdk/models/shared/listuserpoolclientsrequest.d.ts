import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to list the user pool clients.
**/
export declare class ListUserPoolClientsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    userPoolId: string;
}

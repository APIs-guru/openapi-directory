import { SpeakeasyBase } from "../../../internal/utils";
import { UserPoolClientDescription } from "./userpoolclientdescription";
/**
 * Represents the response from the server that lists user pool clients.
**/
export declare class ListUserPoolClientsResponse extends SpeakeasyBase {
    nextToken?: string;
    userPoolClients?: UserPoolClientDescription[];
}

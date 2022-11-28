import { SpeakeasyBase } from "../../../internal/utils";
import { UserPoolDescriptionType } from "./userpooldescriptiontype";
/**
 * Represents the response to list user pools.
**/
export declare class ListUserPoolsResponse extends SpeakeasyBase {
    nextToken?: string;
    userPools?: UserPoolDescriptionType[];
}

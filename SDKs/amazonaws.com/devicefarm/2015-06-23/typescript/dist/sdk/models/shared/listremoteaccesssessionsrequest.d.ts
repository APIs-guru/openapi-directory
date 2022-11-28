import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to return information about the remote access session.
**/
export declare class ListRemoteAccessSessionsRequest extends SpeakeasyBase {
    arn: string;
    nextToken?: string;
}

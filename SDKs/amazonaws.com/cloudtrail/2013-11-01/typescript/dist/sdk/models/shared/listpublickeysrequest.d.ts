import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Requests the public keys for a specified time range.
**/
export declare class ListPublicKeysRequest extends SpeakeasyBase {
    endTime?: Date;
    nextToken?: string;
    startTime?: Date;
}

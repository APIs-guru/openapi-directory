import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The object could not be deleted because links still exist. Remove the links and then try the operation again.
**/
export declare class StillContainsLinksException extends SpeakeasyBase {
    message?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Occurs when deleting a facet that contains an attribute that is a target to an attribute reference in a different facet.
**/
export declare class FacetInUseException extends SpeakeasyBase {
    message?: string;
}

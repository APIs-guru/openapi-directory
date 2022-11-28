import { SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";
/**
 * Represents the response from the server for the request to update user attributes.
**/
export declare class UpdateUserAttributesResponse extends SpeakeasyBase {
    codeDeliveryDetailsList?: CodeDeliveryDetailsType[];
}

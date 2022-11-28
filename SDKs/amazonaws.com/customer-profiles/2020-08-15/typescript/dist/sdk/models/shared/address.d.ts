import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export declare class Address extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city?: string;
    country?: string;
    county?: string;
    postalCode?: string;
    province?: string;
    state?: string;
}

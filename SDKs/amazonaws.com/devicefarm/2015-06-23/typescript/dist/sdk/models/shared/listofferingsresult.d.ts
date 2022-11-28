import { SpeakeasyBase } from "../../../internal/utils";
import { Offering } from "./offering";
/**
 * Represents the return values of the list of offerings.
**/
export declare class ListOfferingsResult extends SpeakeasyBase {
    nextToken?: string;
    offerings?: Offering[];
}

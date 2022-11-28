import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionAssociation } from "./functionassociation";
/**
 * A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.
**/
export declare class FunctionAssociations extends SpeakeasyBase {
    items?: FunctionAssociation[];
    quantity: number;
}

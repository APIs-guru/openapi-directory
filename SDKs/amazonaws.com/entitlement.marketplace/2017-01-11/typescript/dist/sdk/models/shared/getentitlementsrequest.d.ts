import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The GetEntitlementsRequest contains parameters for the GetEntitlements operation.
**/
export declare class GetEntitlementsRequest extends SpeakeasyBase {
    filter?: Map<string, string[]>;
    maxResults?: number;
    nextToken?: string;
    productCode: string;
}

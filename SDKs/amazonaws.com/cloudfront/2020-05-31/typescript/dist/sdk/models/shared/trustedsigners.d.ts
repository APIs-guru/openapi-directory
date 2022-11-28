import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export declare class TrustedSigners extends SpeakeasyBase {
    enabled: boolean;
    items?: string[];
    quantity: number;
}

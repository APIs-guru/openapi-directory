import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export declare class TrustedKeyGroups extends SpeakeasyBase {
    enabled: boolean;
    items?: string[];
    quantity: number;
}

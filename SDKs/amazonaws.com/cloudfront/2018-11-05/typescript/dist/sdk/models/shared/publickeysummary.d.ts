import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex data type for public key information.
**/
export declare class PublicKeySummary extends SpeakeasyBase {
    comment?: string;
    createdTime: Date;
    encodedKey: string;
    id: string;
    name: string;
}

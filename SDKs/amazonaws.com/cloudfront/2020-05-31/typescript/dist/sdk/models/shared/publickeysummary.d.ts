import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a public key.
**/
export declare class PublicKeySummary extends SpeakeasyBase {
    comment?: string;
    createdTime: Date;
    encodedKey: string;
    id: string;
    name: string;
}

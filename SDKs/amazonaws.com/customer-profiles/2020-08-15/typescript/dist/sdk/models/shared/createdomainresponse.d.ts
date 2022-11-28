import { SpeakeasyBase } from "../../../internal/utils";
import { MatchingResponse } from "./matchingresponse";
export declare class CreateDomainResponse extends SpeakeasyBase {
    createdAt: Date;
    deadLetterQueueUrl?: string;
    defaultEncryptionKey?: string;
    defaultExpirationDays: number;
    domainName: string;
    lastUpdatedAt: Date;
    matching?: MatchingResponse;
    tags?: Map<string, string>;
}

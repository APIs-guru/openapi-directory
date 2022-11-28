import { SpeakeasyBase } from "../../../internal/utils";
import { MatchingResponse } from "./matchingresponse";
import { DomainStats } from "./domainstats";
export declare class GetDomainResponse extends SpeakeasyBase {
    createdAt: Date;
    deadLetterQueueUrl?: string;
    defaultEncryptionKey?: string;
    defaultExpirationDays?: number;
    domainName: string;
    lastUpdatedAt: Date;
    matching?: MatchingResponse;
    stats?: DomainStats;
    tags?: Map<string, string>;
}

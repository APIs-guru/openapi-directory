import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchingResponse } from "./matchingresponse";


export class UpdateDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=DeadLetterQueueUrl" })
  deadLetterQueueUrl?: string;

  @Metadata({ data: "json, name=DefaultEncryptionKey" })
  defaultEncryptionKey?: string;

  @Metadata({ data: "json, name=DefaultExpirationDays" })
  defaultExpirationDays?: number;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt: Date;

  @Metadata({ data: "json, name=Matching" })
  matching?: MatchingResponse;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchingResponse } from "./matchingresponse";



export class CreateDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=DeadLetterQueueUrl" })
  deadLetterQueueUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultEncryptionKey" })
  defaultEncryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultExpirationDays" })
  defaultExpirationDays: number;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=Matching" })
  matching?: MatchingResponse;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}

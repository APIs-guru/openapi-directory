import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceOwnerEnum } from "./resourceownerenum";


export class ListCertificateAuthoritiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceOwner" })
  resourceOwner?: ResourceOwnerEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceOwnerEnum } from "./resourceownerenum";



export class ListCertificateAuthoritiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceOwner" })
  resourceOwner?: ResourceOwnerEnum;
}

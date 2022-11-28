import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDomainItem
/** 
 * An object in a list that represents a domain.
**/
export class ListDomainItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}

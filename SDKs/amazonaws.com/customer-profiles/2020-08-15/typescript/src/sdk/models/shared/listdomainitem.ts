import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListDomainItem
/** 
 * An object in a list that represents a domain.
**/
export class ListDomainItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt: Date;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}

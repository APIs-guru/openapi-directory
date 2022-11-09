import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListIntegrationItem
/** 
 * An integration in list of integrations.
**/
export class ListIntegrationItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt: Date;

  @Metadata({ data: "json, name=ObjectTypeName" })
  objectTypeName: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=Uri" })
  uri: string;
}

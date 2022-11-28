import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIntegrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=ObjectTypeName" })
  objectTypeName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Uri" })
  uri: string;
}

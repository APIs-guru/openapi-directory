import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDomainControllersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=DomainControllerIds" })
  domainControllerIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

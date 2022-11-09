import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDomainControllersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=DomainControllerIds" })
  domainControllerIds?: string[];

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceShareTypeEnum } from "./resourcesharetypeenum";


export class GetDatabasesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceShareType" })
  resourceShareType?: ResourceShareTypeEnum;
}

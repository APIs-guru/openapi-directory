import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GetConnectionsFilter } from "./getconnectionsfilter";


export class GetConnectionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=Filter" })
  filter?: GetConnectionsFilter;

  @Metadata({ data: "json, name=HidePassword" })
  hidePassword?: boolean;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

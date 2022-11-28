import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetConnectionsFilter } from "./getconnectionsfilter";



export class GetConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: GetConnectionsFilter;

  @SpeakeasyMetadata({ data: "json, name=HidePassword" })
  hidePassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

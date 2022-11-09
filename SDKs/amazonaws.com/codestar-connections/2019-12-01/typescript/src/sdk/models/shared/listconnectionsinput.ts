import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProviderTypeEnum } from "./providertypeenum";


export class ListConnectionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=HostArnFilter" })
  hostArnFilter?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProviderTypeFilter" })
  providerTypeFilter?: ProviderTypeEnum;
}

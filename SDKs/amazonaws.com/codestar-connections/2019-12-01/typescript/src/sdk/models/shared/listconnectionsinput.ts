import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderTypeEnum } from "./providertypeenum";



export class ListConnectionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HostArnFilter" })
  hostArnFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderTypeFilter" })
  providerTypeFilter?: ProviderTypeEnum;
}

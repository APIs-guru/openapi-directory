import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderFieldEnum } from "./capacityproviderfieldenum";



export class DescribeCapacityProvidersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProviders" })
  capacityProviders?: string[];

  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: CapacityProviderFieldEnum[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CapacityProviderFieldEnum } from "./capacityproviderfieldenum";


export class DescribeCapacityProvidersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProviders" })
  capacityProviders?: string[];

  @Metadata({ data: "json, name=include" })
  include?: CapacityProviderFieldEnum[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

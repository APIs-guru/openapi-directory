import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CapacityProvider } from "./capacityprovider";
import { Failure } from "./failure";


export class DescribeCapacityProvidersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProviders", elemType: shared.CapacityProvider })
  capacityProviders?: CapacityProvider[];

  @Metadata({ data: "json, name=failures", elemType: shared.Failure })
  failures?: Failure[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

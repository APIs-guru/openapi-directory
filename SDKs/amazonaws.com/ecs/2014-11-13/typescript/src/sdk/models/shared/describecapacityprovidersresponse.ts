import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityProvider } from "./capacityprovider";
import { Failure } from "./failure";



export class DescribeCapacityProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProviders", elemType: CapacityProvider })
  capacityProviders?: CapacityProvider[];

  @SpeakeasyMetadata({ data: "json, name=failures", elemType: Failure })
  failures?: Failure[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

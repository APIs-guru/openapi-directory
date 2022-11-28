import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



export class DescribeAddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Address })
  addresses?: Address[];
}

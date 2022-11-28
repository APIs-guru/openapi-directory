import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressAttribute } from "./addressattribute";



export class DescribeAddressesAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AddressAttribute })
  addresses?: AddressAttribute[];

  @SpeakeasyMetadata()
  nextToken?: string;
}

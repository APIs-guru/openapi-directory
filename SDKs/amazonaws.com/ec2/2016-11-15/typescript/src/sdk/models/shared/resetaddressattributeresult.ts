import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressAttribute } from "./addressattribute";



export class ResetAddressAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: AddressAttribute;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressAttribute } from "./addressattribute";



export class ModifyAddressAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: AddressAttribute;
}

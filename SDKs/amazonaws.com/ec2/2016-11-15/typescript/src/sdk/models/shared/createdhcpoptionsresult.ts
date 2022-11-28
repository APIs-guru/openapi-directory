import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DhcpOptions } from "./dhcpoptions";



export class CreateDhcpOptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dhcpOptions?: DhcpOptions;
}

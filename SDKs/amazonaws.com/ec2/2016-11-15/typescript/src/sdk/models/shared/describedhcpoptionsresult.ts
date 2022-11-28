import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DhcpOptions } from "./dhcpoptions";



export class DescribeDhcpOptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DhcpOptions })
  dhcpOptions?: DhcpOptions[];

  @SpeakeasyMetadata()
  nextToken?: string;
}

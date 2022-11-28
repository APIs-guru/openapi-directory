import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetNetwork } from "./targetnetwork";



export class DescribeClientVpnTargetNetworksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TargetNetwork })
  clientVpnTargetNetworks?: TargetNetwork[];

  @SpeakeasyMetadata()
  nextToken?: string;
}

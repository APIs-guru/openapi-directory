import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CoipAddressUsage } from "./coipaddressusage";



export class GetCoipPoolUsageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CoipAddressUsage })
  coipAddressUsages?: CoipAddressUsage[];

  @SpeakeasyMetadata()
  coipPoolId?: string;

  @SpeakeasyMetadata()
  localGatewayRouteTableId?: string;
}

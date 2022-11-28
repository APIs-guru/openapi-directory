import { SpeakeasyBase } from "../../../internal/utils";
import { CoipAddressUsage } from "./coipaddressusage";
export declare class GetCoipPoolUsageResult extends SpeakeasyBase {
    coipAddressUsages?: CoipAddressUsage[];
    coipPoolId?: string;
    localGatewayRouteTableId?: string;
}

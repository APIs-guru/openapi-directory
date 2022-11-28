import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.
**/
export declare class ProvisionedBandwidth extends SpeakeasyBase {
    provisionTime?: Date;
    provisioned?: string;
    requestTime?: Date;
    requested?: string;
    status?: string;
}

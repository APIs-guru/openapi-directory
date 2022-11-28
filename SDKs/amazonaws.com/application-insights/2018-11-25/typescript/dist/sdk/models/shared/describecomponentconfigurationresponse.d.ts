import { SpeakeasyBase } from "../../../internal/utils";
import { TierEnum } from "./tierenum";
export declare class DescribeComponentConfigurationResponse extends SpeakeasyBase {
    componentConfiguration?: string;
    monitor?: boolean;
    tier?: TierEnum;
}

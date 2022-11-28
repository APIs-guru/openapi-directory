import { SpeakeasyBase } from "../../../internal/utils";
import { TierEnum } from "./tierenum";
export declare class UpdateComponentConfigurationRequest extends SpeakeasyBase {
    componentConfiguration?: string;
    componentName: string;
    monitor?: boolean;
    resourceGroupName: string;
    tier?: TierEnum;
}

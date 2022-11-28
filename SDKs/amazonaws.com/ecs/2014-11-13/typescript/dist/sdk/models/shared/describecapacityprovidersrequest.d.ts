import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderFieldEnum } from "./capacityproviderfieldenum";
export declare class DescribeCapacityProvidersRequest extends SpeakeasyBase {
    capacityProviders?: string[];
    include?: CapacityProviderFieldEnum[];
    maxResults?: number;
    nextToken?: string;
}

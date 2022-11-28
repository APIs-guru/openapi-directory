import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
import { WarmPoolConfiguration } from "./warmpoolconfiguration";
export declare class DescribeWarmPoolAnswer extends SpeakeasyBase {
    instances?: Instance[];
    nextToken?: string;
    warmPoolConfiguration?: WarmPoolConfiguration;
}

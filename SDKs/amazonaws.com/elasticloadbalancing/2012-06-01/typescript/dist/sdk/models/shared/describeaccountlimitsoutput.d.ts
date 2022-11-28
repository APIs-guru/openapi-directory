import { SpeakeasyBase } from "../../../internal/utils";
import { Limit } from "./limit";
export declare class DescribeAccountLimitsOutput extends SpeakeasyBase {
    limits?: Limit[];
    nextMarker?: string;
}

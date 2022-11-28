import { SpeakeasyBase } from "../../../internal/utils";
import { MovingAddressStatus } from "./movingaddressstatus";
export declare class DescribeMovingAddressesResult extends SpeakeasyBase {
    movingAddressStatuses?: MovingAddressStatus[];
    nextToken?: string;
}

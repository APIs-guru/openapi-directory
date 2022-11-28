import { SpeakeasyBase } from "../../../internal/utils";
import { Reservation } from "./reservation";
export declare class DescribeInstancesResult extends SpeakeasyBase {
    nextToken?: string;
    reservations?: Reservation[];
}

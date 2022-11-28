import { SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";
export declare class DescribeSubnetsResult extends SpeakeasyBase {
    nextToken?: string;
    subnets?: Subnet[];
}

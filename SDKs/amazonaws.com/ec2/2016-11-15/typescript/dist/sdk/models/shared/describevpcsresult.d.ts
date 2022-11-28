import { SpeakeasyBase } from "../../../internal/utils";
import { Vpc } from "./vpc";
export declare class DescribeVpcsResult extends SpeakeasyBase {
    nextToken?: string;
    vpcs?: Vpc[];
}

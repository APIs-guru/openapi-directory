import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeInstancesOutput extends SpeakeasyBase {
    instances?: Instance[];
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEnvironmentDetail } from "./computeenvironmentdetail";
export declare class DescribeComputeEnvironmentsResponse extends SpeakeasyBase {
    computeEnvironments?: ComputeEnvironmentDetail[];
    nextToken?: string;
}

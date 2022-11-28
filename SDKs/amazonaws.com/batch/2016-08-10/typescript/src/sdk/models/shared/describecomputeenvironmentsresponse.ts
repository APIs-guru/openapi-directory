import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeEnvironmentDetail } from "./computeenvironmentdetail";



export class DescribeComputeEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEnvironments", elemType: ComputeEnvironmentDetail })
  computeEnvironments?: ComputeEnvironmentDetail[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

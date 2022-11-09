import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComputeEnvironmentDetail } from "./computeenvironmentdetail";


export class DescribeComputeEnvironmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEnvironments", elemType: shared.ComputeEnvironmentDetail })
  computeEnvironments?: ComputeEnvironmentDetail[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionRecord } from "./executionrecord";


export class DescribeFlowExecutionRecordsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=flowExecutions", elemType: shared.ExecutionRecord })
  flowExecutions?: ExecutionRecord[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

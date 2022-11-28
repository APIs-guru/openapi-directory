import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionRecord } from "./executionrecord";



export class DescribeFlowExecutionRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flowExecutions", elemType: ExecutionRecord })
  flowExecutions?: ExecutionRecord[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowLog } from "./flowlog";



export class DescribeFlowLogsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FlowLog })
  flowLogs?: FlowLog[];

  @SpeakeasyMetadata()
  nextToken?: string;
}

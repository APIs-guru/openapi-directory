import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationExecutionStatus } from "./remediationexecutionstatus";



export class DescribeRemediationExecutionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RemediationExecutionStatuses", elemType: RemediationExecutionStatus })
  remediationExecutionStatuses?: RemediationExecutionStatus[];
}

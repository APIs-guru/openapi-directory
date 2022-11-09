import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemediationExecutionStatus } from "./remediationexecutionstatus";


export class DescribeRemediationExecutionStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RemediationExecutionStatuses", elemType: shared.RemediationExecutionStatus })
  remediationExecutionStatuses?: RemediationExecutionStatus[];
}

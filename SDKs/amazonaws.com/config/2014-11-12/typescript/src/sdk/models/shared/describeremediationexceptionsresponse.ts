import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemediationException } from "./remediationexception";


export class DescribeRemediationExceptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RemediationExceptions", elemType: shared.RemediationException })
  remediationExceptions?: RemediationException[];
}

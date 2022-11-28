import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationException } from "./remediationexception";



export class DescribeRemediationExceptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RemediationExceptions", elemType: RemediationException })
  remediationExceptions?: RemediationException[];
}

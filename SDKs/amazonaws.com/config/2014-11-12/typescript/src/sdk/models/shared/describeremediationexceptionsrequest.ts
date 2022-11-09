import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemediationExceptionResourceKey } from "./remediationexceptionresourcekey";


export class DescribeRemediationExceptionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceKeys", elemType: shared.RemediationExceptionResourceKey })
  resourceKeys?: RemediationExceptionResourceKey[];
}

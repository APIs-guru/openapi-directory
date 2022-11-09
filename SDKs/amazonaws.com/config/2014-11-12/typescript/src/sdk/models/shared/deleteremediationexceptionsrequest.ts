import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemediationExceptionResourceKey } from "./remediationexceptionresourcekey";


export class DeleteRemediationExceptionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @Metadata({ data: "json, name=ResourceKeys", elemType: shared.RemediationExceptionResourceKey })
  resourceKeys: RemediationExceptionResourceKey[];
}

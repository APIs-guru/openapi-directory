import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationExceptionResourceKey } from "./remediationexceptionresourcekey";



export class DeleteRemediationExceptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceKeys", elemType: RemediationExceptionResourceKey })
  resourceKeys: RemediationExceptionResourceKey[];
}

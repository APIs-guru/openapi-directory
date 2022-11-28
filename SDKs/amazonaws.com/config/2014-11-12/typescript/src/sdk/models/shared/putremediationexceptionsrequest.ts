import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationExceptionResourceKey } from "./remediationexceptionresourcekey";



export class PutRemediationExceptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationTime" })
  expirationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceKeys", elemType: RemediationExceptionResourceKey })
  resourceKeys: RemediationExceptionResourceKey[];
}

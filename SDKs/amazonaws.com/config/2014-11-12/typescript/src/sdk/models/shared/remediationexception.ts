import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemediationException
/** 
 * An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type. 
**/
export class RemediationException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationTime" })
  expirationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: string;
}

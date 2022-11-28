import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LaunchTemplateConfiguration
/** 
 * Identifies an Amazon EC2 launch template to use for a specific account.
**/
export class LaunchTemplateConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=launchTemplateId" })
  launchTemplateId: string;

  @SpeakeasyMetadata({ data: "json, name=setDefaultVersion" })
  setDefaultVersion?: boolean;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LaunchTemplateConfiguration
/** 
 * Identifies an Amazon EC2 launch template to use for a specific account.
**/
export class LaunchTemplateConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=launchTemplateId" })
  launchTemplateId: string;

  @Metadata({ data: "json, name=setDefaultVersion" })
  setDefaultVersion?: boolean;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationInfo
/** 
 * Describes the status of the application.
**/
export class ApplicationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CWEMonitorEnabled" })
  cweMonitorEnabled?: boolean;

  @Metadata({ data: "json, name=LifeCycle" })
  lifeCycle?: string;

  @Metadata({ data: "json, name=OpsCenterEnabled" })
  opsCenterEnabled?: boolean;

  @Metadata({ data: "json, name=OpsItemSNSTopicArn" })
  opsItemSnsTopicArn?: string;

  @Metadata({ data: "json, name=Remarks" })
  remarks?: string;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;
}

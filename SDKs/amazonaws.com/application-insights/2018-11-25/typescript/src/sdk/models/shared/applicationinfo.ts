import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationInfo
/** 
 * Describes the status of the application.
**/
export class ApplicationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CWEMonitorEnabled" })
  cweMonitorEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LifeCycle" })
  lifeCycle?: string;

  @SpeakeasyMetadata({ data: "json, name=OpsCenterEnabled" })
  opsCenterEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OpsItemSNSTopicArn" })
  opsItemSnsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Remarks" })
  remarks?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;
}

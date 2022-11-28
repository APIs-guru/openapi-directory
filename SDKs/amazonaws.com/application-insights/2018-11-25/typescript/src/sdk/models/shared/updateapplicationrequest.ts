import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CWEMonitorEnabled" })
  cweMonitorEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OpsCenterEnabled" })
  opsCenterEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OpsItemSNSTopicArn" })
  opsItemSnsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RemoveSNSTopic" })
  removeSnsTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CWEMonitorEnabled" })
  cweMonitorEnabled?: boolean;

  @Metadata({ data: "json, name=OpsCenterEnabled" })
  opsCenterEnabled?: boolean;

  @Metadata({ data: "json, name=OpsItemSNSTopicArn" })
  opsItemSnsTopicArn?: string;

  @Metadata({ data: "json, name=RemoveSNSTopic" })
  removeSnsTopic?: boolean;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;
}

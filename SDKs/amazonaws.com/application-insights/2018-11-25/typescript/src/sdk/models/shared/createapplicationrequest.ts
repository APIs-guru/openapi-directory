import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CWEMonitorEnabled" })
  cweMonitorEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OpsCenterEnabled" })
  opsCenterEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OpsItemSNSTopicArn" })
  opsItemSnsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CWEMonitorEnabled" })
  cweMonitorEnabled?: boolean;

  @Metadata({ data: "json, name=OpsCenterEnabled" })
  opsCenterEnabled?: boolean;

  @Metadata({ data: "json, name=OpsItemSNSTopicArn" })
  opsItemSnsTopicArn?: string;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateMitigationActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionArn" })
  actionArn?: string;

  @Metadata({ data: "json, name=actionId" })
  actionId?: string;
}

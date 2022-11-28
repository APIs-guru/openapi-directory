import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMitigationActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionArn" })
  actionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=actionId" })
  actionId?: string;
}

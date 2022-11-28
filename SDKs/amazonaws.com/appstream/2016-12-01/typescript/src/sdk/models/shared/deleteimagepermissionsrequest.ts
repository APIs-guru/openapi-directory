import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImagePermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SharedAccountId" })
  sharedAccountId: string;
}

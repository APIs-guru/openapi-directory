import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteImagePermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SharedAccountId" })
  sharedAccountId: string;
}

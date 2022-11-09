import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChangesetInfo } from "./changesetinfo";


export class CreateChangesetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeset" })
  changeset?: ChangesetInfo;
}

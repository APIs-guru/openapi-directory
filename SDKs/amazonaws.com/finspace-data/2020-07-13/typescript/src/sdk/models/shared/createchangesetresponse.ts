import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangesetInfo } from "./changesetinfo";



export class CreateChangesetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeset" })
  changeset?: ChangesetInfo;
}

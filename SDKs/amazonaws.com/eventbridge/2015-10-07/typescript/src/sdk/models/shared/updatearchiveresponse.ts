import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchiveStateEnum } from "./archivestateenum";



export class UpdateArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArchiveArn" })
  archiveArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ArchiveStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateReason" })
  stateReason?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchiveStateEnum } from "./archivestateenum";


export class CreateArchiveResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArchiveArn" })
  archiveArn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=State" })
  state?: ArchiveStateEnum;

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;
}

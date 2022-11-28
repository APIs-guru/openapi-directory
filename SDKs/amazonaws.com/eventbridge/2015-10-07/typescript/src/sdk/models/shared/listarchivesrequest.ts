import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchiveStateEnum } from "./archivestateenum";



export class ListArchivesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NamePrefix" })
  namePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ArchiveStateEnum;
}

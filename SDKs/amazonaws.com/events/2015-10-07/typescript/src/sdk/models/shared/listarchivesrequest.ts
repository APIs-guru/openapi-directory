import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchiveStateEnum } from "./archivestateenum";


export class ListArchivesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NamePrefix" })
  namePrefix?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=State" })
  state?: ArchiveStateEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";



export class GetTranscriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InitialContactId" })
  initialContactId?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Transcript", elemType: Item })
  transcript?: Item[];
}

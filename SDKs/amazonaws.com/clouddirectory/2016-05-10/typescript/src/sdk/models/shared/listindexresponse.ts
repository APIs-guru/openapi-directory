import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexAttachment } from "./indexattachment";



export class ListIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexAttachments", elemType: IndexAttachment })
  indexAttachments?: IndexAttachment[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

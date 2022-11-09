import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IndexAttachment } from "./indexattachment";


export class ListIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexAttachments", elemType: shared.IndexAttachment })
  indexAttachments?: IndexAttachment[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

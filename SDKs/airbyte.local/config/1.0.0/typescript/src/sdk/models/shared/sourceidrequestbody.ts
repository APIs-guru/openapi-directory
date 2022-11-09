import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SourceIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceId" })
  sourceId: string;
}

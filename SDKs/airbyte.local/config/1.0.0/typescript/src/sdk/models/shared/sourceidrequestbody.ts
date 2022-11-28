import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SourceIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId: string;
}

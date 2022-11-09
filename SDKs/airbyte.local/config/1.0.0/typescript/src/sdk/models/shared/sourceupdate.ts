import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SourceUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sourceId" })
  sourceId: string;
}

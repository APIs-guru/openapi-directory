import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SourceCoreConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @Metadata({ data: "json, name=sourceDefinitionId" })
  sourceDefinitionId: string;
}

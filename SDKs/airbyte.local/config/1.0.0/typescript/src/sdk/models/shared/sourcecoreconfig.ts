import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SourceCoreConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @SpeakeasyMetadata({ data: "json, name=sourceDefinitionId" })
  sourceDefinitionId: string;
}

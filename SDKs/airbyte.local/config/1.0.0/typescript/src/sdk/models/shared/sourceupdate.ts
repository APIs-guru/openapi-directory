import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SourceUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId: string;
}

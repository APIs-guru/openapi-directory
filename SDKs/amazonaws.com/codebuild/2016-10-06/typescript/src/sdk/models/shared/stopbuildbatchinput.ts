import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopBuildBatchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

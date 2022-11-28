import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientCount" })
  clientCount?: number;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}

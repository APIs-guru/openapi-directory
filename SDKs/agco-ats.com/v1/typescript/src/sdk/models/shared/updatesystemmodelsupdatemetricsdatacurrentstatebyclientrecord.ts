import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientCount" })
  clientCount?: number;

  @Metadata({ data: "json, name=State" })
  state?: string;
}

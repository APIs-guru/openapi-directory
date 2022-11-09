import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleNumber" })
  bundleNumber?: number;

  @Metadata({ data: "json, name=ClientCount" })
  clientCount?: number;

  @Metadata({ data: "json, name=ReleaseName" })
  releaseName?: string;
}

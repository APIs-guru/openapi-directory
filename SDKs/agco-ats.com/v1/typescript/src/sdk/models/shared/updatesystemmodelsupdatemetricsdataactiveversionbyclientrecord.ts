import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BundleNumber" })
  bundleNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=ClientCount" })
  clientCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ReleaseName" })
  releaseName?: string;
}

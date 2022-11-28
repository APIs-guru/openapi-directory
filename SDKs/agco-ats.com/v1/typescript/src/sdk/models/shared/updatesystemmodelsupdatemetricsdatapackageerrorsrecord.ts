import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientCount" })
  clientCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=LongDescription" })
  longDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ShortDescription" })
  shortDescription?: string;
}

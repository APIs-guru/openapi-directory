import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientCount" })
  clientCount?: number;

  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=LongDescription" })
  longDescription?: string;

  @Metadata({ data: "json, name=ShortDescription" })
  shortDescription?: string;
}

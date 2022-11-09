import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeFhirExportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @Metadata({ data: "json, name=JobId" })
  jobId: string;
}

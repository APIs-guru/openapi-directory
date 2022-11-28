import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFhirImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";



export class StartFhirExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatastoreId" })
  datastoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus: JobStatusEnum;
}

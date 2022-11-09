import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";


export class StartFhirExportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatastoreId" })
  datastoreId?: string;

  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus: JobStatusEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";


export class StartEntitiesDetectionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobArn" })
  jobArn?: string;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;
}

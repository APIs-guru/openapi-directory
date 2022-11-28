import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";



export class ListFhirExportJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SubmittedAfter" })
  submittedAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=SubmittedBefore" })
  submittedBefore?: Date;
}

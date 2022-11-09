import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobRunsDeleteJobRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobRunID" })
  jobRunId: number;
}


export class JobRunsDeleteJobRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JobRunsDeleteJobRunPathParams;
}


export class JobRunsDeleteJobRunResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

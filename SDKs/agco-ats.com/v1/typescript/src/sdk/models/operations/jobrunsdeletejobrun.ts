import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobRunsDeleteJobRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobRunID" })
  jobRunId: number;
}


export class JobRunsDeleteJobRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JobRunsDeleteJobRunPathParams;
}


export class JobRunsDeleteJobRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

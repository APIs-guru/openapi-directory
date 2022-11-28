import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobsDeleteJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobID" })
  jobId: number;
}


export class JobsDeleteJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JobsDeleteJobPathParams;
}


export class JobsDeleteJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

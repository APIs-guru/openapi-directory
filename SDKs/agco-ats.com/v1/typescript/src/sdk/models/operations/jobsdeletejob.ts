import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobsDeleteJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobID" })
  jobId: number;
}


export class JobsDeleteJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JobsDeleteJobPathParams;
}


export class JobsDeleteJobResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

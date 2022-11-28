import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JobRunsPutJobRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobRunID" })
  jobRunId: number;
}


export class JobRunsPutJobRunRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoJobRun?: shared.BuildSystemSharedDtoJobRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoJobRun1?: shared.BuildSystemSharedDtoJobRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoJobRun2?: shared.BuildSystemSharedDtoJobRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class JobRunsPutJobRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JobRunsPutJobRunPathParams;

  @SpeakeasyMetadata()
  request: JobRunsPutJobRunRequestsInput;
}


export class JobRunsPutJobRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

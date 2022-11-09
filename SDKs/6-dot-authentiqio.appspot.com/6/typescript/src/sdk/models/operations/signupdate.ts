import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=job" })
  job: string;
}


export class SignUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SignUpdatePathParams;
}


export class SignUpdateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

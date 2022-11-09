import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HeadKeyPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PK" })
  pk: string;
}


export class HeadKeyPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: HeadKeyPkPathParams;
}


export class HeadKeyPkResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

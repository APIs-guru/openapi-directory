import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HeadKeyPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PK" })
  pk: string;
}


export class HeadKeyPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HeadKeyPkPathParams;
}


export class HeadKeyPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

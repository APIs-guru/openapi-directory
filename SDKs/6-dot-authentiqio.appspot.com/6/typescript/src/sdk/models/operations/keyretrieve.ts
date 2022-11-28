import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PK" })
  pk: string;
}


export class KeyRetrieveJwt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=since" })
  since?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=sub" })
  sub?: string;
}


export class KeyRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: KeyRetrievePathParams;
}


export class KeyRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  jwt?: KeyRetrieveJwt;

  @SpeakeasyMetadata()
  statusCode: number;
}

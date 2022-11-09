import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyRetrievePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PK" })
  pk: string;
}


export class KeyRetrieveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: KeyRetrievePathParams;
}


export class KeyRetrieveJwt extends SpeakeasyBase {
  @Metadata({ data: "json, name=since" })
  since?: Date;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=sub" })
  sub?: string;
}


export class KeyRetrieveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  jwt?: KeyRetrieveJwt;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyRegisterRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/jwt" })
  request: Uint8Array;
}


export class KeyRegister201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class KeyRegisterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  keyRegister201ApplicationJsonObject?: KeyRegister201ApplicationJson;
}

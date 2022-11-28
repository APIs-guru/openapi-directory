import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyRegister201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class KeyRegisterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/jwt" })
  request: Uint8Array;
}


export class KeyRegisterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  keyRegister201ApplicationJsonObject?: KeyRegister201ApplicationJson;
}

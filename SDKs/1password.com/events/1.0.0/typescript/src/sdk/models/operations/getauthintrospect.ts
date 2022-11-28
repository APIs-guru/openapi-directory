import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAuthIntrospectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwtsa: shared.SchemeJwtsa;
}


export class GetAuthIntrospectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetAuthIntrospectSecurity;
}


export class GetAuthIntrospectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  introspection?: shared.Introspection;

  @SpeakeasyMetadata()
  statusCode: number;
}

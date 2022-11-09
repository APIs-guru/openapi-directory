import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAuthIntrospectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwtsa: shared.SchemeJwtsa;
}


export class GetAuthIntrospectRequest extends SpeakeasyBase {
  @Metadata()
  security: GetAuthIntrospectSecurity;
}


export class GetAuthIntrospectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  introspection?: shared.Introspection;

  @Metadata()
  statusCode: number;
}

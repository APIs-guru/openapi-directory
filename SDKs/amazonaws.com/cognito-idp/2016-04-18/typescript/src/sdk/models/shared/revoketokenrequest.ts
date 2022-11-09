import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RevokeTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientId" })
  clientId: string;

  @Metadata({ data: "json, name=ClientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=Token" })
  token: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RevokeTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=ClientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=Token" })
  token: string;
}

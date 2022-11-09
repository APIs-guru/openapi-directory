import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateSoftwareTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=Session" })
  session?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateSoftwareTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecretCode" })
  secretCode?: string;

  @Metadata({ data: "json, name=Session" })
  session?: string;
}

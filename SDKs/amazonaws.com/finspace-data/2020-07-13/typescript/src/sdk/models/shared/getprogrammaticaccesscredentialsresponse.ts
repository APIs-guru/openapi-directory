import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Credentials } from "./credentials";


export class GetProgrammaticAccessCredentialsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials" })
  credentials?: Credentials;

  @Metadata({ data: "json, name=durationInMinutes" })
  durationInMinutes?: number;
}

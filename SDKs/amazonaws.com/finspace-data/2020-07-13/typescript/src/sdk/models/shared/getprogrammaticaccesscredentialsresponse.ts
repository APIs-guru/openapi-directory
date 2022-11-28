import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";



export class GetProgrammaticAccessCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: Credentials;

  @SpeakeasyMetadata({ data: "json, name=durationInMinutes" })
  durationInMinutes?: number;
}

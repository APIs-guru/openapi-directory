import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=ChallengeCode" })
  challengeCode?: string;

  @Metadata({ data: "json, name=SessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=Ttl" })
  ttl?: string;
}

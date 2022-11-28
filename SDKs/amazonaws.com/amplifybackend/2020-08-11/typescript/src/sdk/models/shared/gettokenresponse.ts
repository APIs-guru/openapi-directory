import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=ChallengeCode" })
  challengeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=SessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Ttl" })
  ttl?: string;
}

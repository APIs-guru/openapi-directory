import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";



export class UpdateStudioSessionMappingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityName" })
  identityName?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityType" })
  identityType: IdentityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SessionPolicyArn" })
  sessionPolicyArn: string;

  @SpeakeasyMetadata({ data: "json, name=StudioId" })
  studioId: string;
}

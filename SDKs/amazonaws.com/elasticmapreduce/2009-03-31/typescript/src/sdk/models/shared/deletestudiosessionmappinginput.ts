import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";



export class DeleteStudioSessionMappingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityName" })
  identityName?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityType" })
  identityType: IdentityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StudioId" })
  studioId: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityTypeEnum } from "./identitytypeenum";


export class GetStudioSessionMappingInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @Metadata({ data: "json, name=IdentityName" })
  identityName?: string;

  @Metadata({ data: "json, name=IdentityType" })
  identityType: IdentityTypeEnum;

  @Metadata({ data: "json, name=StudioId" })
  studioId: string;
}

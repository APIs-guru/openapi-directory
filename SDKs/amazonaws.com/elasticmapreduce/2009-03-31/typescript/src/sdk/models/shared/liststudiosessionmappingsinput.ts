import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityTypeEnum } from "./identitytypeenum";


export class ListStudioSessionMappingsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=StudioId" })
  studioId?: string;
}

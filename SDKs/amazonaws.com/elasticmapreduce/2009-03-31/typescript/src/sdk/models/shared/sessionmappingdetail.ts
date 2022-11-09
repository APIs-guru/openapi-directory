import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityTypeEnum } from "./identitytypeenum";


// SessionMappingDetail
/** 
 * Details for an Amazon EMR Studio session mapping including creation time, user or group ID, Studio ID, and so on.
**/
export class SessionMappingDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @Metadata({ data: "json, name=IdentityName" })
  identityName?: string;

  @Metadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=SessionPolicyArn" })
  sessionPolicyArn?: string;

  @Metadata({ data: "json, name=StudioId" })
  studioId?: string;
}

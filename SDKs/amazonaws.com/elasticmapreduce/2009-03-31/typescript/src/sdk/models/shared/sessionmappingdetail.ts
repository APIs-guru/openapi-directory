import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";



// SessionMappingDetail
/** 
 * Details for an Amazon EMR Studio session mapping including creation time, user or group ID, Studio ID, and so on.
**/
export class SessionMappingDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityName" })
  identityName?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SessionPolicyArn" })
  sessionPolicyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StudioId" })
  studioId?: string;
}

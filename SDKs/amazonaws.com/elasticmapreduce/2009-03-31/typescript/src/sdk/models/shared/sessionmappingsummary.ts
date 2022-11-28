import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";



// SessionMappingSummary
/** 
 * Details for an Amazon EMR Studio session mapping. The details do not include the time the session mapping was last modified.
**/
export class SessionMappingSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityName" })
  identityName?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SessionPolicyArn" })
  sessionPolicyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StudioId" })
  studioId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityTypeEnum } from "./identitytypeenum";


// SessionMappingSummary
/** 
 * Details for an Amazon EMR Studio session mapping. The details do not include the time the session mapping was last modified.
**/
export class SessionMappingSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @Metadata({ data: "json, name=IdentityName" })
  identityName?: string;

  @Metadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @Metadata({ data: "json, name=SessionPolicyArn" })
  sessionPolicyArn?: string;

  @Metadata({ data: "json, name=StudioId" })
  studioId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceCredentials
/** 
 * Set of credentials required to remotely access a fleet instance. Access credentials are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object.
**/
export class InstanceCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=Secret" })
  secret?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}

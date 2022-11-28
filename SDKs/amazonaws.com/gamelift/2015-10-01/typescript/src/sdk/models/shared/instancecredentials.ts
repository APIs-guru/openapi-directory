import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceCredentials
/** 
 * Set of credentials required to remotely access a fleet instance. Access credentials are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object.
**/
export class InstanceCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}

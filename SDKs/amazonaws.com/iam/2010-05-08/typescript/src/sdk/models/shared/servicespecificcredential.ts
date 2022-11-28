import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";



// ServiceSpecificCredential
/** 
 * Contains the details of a service-specific credential.
**/
export class ServiceSpecificCredential extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createDate: Date;

  @SpeakeasyMetadata()
  serviceName: string;

  @SpeakeasyMetadata()
  servicePassword: string;

  @SpeakeasyMetadata()
  serviceSpecificCredentialId: string;

  @SpeakeasyMetadata()
  serviceUserName: string;

  @SpeakeasyMetadata()
  status: StatusTypeEnum;

  @SpeakeasyMetadata()
  userName: string;
}

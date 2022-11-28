import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";



// ServiceSpecificCredentialMetadata
/** 
 * Contains additional details about a service-specific credential.
**/
export class ServiceSpecificCredentialMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createDate: Date;

  @SpeakeasyMetadata()
  serviceName: string;

  @SpeakeasyMetadata()
  serviceSpecificCredentialId: string;

  @SpeakeasyMetadata()
  serviceUserName: string;

  @SpeakeasyMetadata()
  status: StatusTypeEnum;

  @SpeakeasyMetadata()
  userName: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceSpecificCredentialMetadata } from "./servicespecificcredentialmetadata";



export class ListServiceSpecificCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ServiceSpecificCredentialMetadata })
  serviceSpecificCredentials?: ServiceSpecificCredentialMetadata[];
}

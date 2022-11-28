import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceSpecificCredential } from "./servicespecificcredential";



export class CreateServiceSpecificCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serviceSpecificCredential?: ServiceSpecificCredential;
}

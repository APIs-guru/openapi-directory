import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceSpecificCredential } from "./servicespecificcredential";



export class ResetServiceSpecificCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serviceSpecificCredential?: ServiceSpecificCredential;
}

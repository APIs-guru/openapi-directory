import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPair } from "./keypair";



export class CreateProvisioningClaimResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=certificatePem" })
  certificatePem?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: Date;

  @SpeakeasyMetadata({ data: "json, name=keyPair" })
  keyPair?: KeyPair;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyPair } from "./keypair";


export class CreateProvisioningClaimResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=certificatePem" })
  certificatePem?: string;

  @Metadata({ data: "json, name=expiration" })
  expiration?: Date;

  @Metadata({ data: "json, name=keyPair" })
  keyPair?: KeyPair;
}

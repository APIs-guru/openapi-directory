import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendSshPublicKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=InstanceOSUser" })
  instanceOsUser: string;

  @Metadata({ data: "json, name=SSHPublicKey" })
  sshPublicKey: string;
}

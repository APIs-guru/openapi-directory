import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendSshPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceOSUser" })
  instanceOsUser: string;

  @SpeakeasyMetadata({ data: "json, name=SSHPublicKey" })
  sshPublicKey: string;
}

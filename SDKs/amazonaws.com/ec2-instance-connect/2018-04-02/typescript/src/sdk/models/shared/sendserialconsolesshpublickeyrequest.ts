import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendSerialConsoleSshPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=SSHPublicKey" })
  sshPublicKey: string;

  @SpeakeasyMetadata({ data: "json, name=SerialPort" })
  serialPort?: number;
}

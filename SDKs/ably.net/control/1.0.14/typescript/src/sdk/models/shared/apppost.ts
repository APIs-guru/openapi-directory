import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AppPostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AppPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apnsCertificate" })
  apnsCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=apnsPrivateKey" })
  apnsPrivateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=apnsUseSandboxEndpoint" })
  apnsUseSandboxEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fcmKey" })
  fcmKey?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AppPostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tlsOnly" })
  tlsOnly?: boolean;
}

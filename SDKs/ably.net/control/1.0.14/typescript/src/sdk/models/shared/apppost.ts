import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppPostStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AppPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=apnsCertificate" })
  apnsCertificate?: string;

  @Metadata({ data: "json, name=apnsPrivateKey" })
  apnsPrivateKey?: string;

  @Metadata({ data: "json, name=apnsUseSandboxEndpoint" })
  apnsUseSandboxEndpoint?: boolean;

  @Metadata({ data: "json, name=fcmKey" })
  fcmKey?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=status" })
  status?: AppPostStatusEnum;

  @Metadata({ data: "json, name=tlsOnly" })
  tlsOnly?: boolean;
}

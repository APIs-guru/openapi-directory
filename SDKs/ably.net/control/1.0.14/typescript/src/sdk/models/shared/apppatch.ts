import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppPatchStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AppPatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=apnsCertificate" })
  apnsCertificate?: string;

  @Metadata({ data: "json, name=apnsPrivateKey" })
  apnsPrivateKey?: string;

  @Metadata({ data: "json, name=apnsUseSandboxEndpoint" })
  apnsUseSandboxEndpoint?: boolean;

  @Metadata({ data: "json, name=fcmKey" })
  fcmKey?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: AppPatchStatusEnum;

  @Metadata({ data: "json, name=tlsOnly" })
  tlsOnly?: boolean;
}

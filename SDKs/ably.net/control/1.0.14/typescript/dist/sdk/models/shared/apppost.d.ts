import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AppPostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AppPost extends SpeakeasyBase {
    apnsCertificate?: string;
    apnsPrivateKey?: string;
    apnsUseSandboxEndpoint?: boolean;
    fcmKey?: string;
    name: string;
    status?: AppPostStatusEnum;
    tlsOnly?: boolean;
}

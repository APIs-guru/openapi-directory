import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AppPatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AppPatch extends SpeakeasyBase {
    apnsCertificate?: string;
    apnsPrivateKey?: string;
    apnsUseSandboxEndpoint?: boolean;
    fcmKey?: string;
    name?: string;
    status?: AppPatchStatusEnum;
    tlsOnly?: boolean;
}

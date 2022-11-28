import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AppResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AppResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    accountId?: string;
    apnsUseSandboxEndpoint?: boolean;
    id?: string;
    name?: string;
    status?: AppResponseStatusEnum;
    tlsOnly?: boolean;
}

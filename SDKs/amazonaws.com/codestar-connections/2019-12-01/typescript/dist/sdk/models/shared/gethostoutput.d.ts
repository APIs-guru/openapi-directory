import { SpeakeasyBase } from "../../../internal/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { VpcConfiguration } from "./vpcconfiguration";
export declare class GetHostOutput extends SpeakeasyBase {
    name?: string;
    providerEndpoint?: string;
    providerType?: ProviderTypeEnum;
    status?: string;
    vpcConfiguration?: VpcConfiguration;
}

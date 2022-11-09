import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { Tag } from "./tag";
import { VpcConfiguration } from "./vpcconfiguration";
export declare class CreateHostInput extends SpeakeasyBase {
    name: string;
    providerEndpoint: string;
    providerType: ProviderTypeEnum;
    tags?: Tag[];
    vpcConfiguration?: VpcConfiguration;
}

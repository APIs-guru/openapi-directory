import { SpeakeasyBase } from "../../../internal/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { Tag } from "./tag";
export declare class CreateConnectionInput extends SpeakeasyBase {
    connectionName: string;
    hostArn?: string;
    providerType?: ProviderTypeEnum;
    tags?: Tag[];
}

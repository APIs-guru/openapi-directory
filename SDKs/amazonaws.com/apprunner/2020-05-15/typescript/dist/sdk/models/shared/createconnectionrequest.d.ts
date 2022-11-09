import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { Tag } from "./tag";
export declare class CreateConnectionRequest extends SpeakeasyBase {
    connectionName: string;
    providerType: ProviderTypeEnum;
    tags?: Tag[];
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProviderTypeEnum } from "./providertypeenum";
export declare class ListConnectionsInput extends SpeakeasyBase {
    hostArnFilter?: string;
    maxResults?: number;
    nextToken?: string;
    providerTypeFilter?: ProviderTypeEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ListIntegrationItem } from "./listintegrationitem";
export declare class ListIntegrationsResponse extends SpeakeasyBase {
    items?: ListIntegrationItem[];
    nextToken?: string;
}

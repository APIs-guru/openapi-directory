import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request.
**/
export declare class CreateOpenIdConnectProviderResponse extends SpeakeasyBase {
    openIdConnectProviderArn?: string;
    tags?: Tag[];
}

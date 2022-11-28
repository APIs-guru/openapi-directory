import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration information when authentication mode is FEDERATED.
**/
export declare class FederationParameters extends SpeakeasyBase {
    applicationCallBackUrl?: string;
    attributeMap?: Map<string, string>;
    federationProviderName?: string;
    federationUrn?: string;
    samlMetadataDocument?: string;
    samlMetadataUrl?: string;
}

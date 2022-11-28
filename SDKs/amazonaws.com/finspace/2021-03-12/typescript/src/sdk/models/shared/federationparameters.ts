import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FederationParameters
/** 
 * Configuration information when authentication mode is FEDERATED.
**/
export class FederationParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationCallBackURL" })
  applicationCallBackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=attributeMap" })
  attributeMap?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=federationProviderName" })
  federationProviderName?: string;

  @SpeakeasyMetadata({ data: "json, name=federationURN" })
  federationUrn?: string;

  @SpeakeasyMetadata({ data: "json, name=samlMetadataDocument" })
  samlMetadataDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=samlMetadataURL" })
  samlMetadataUrl?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FederationParameters
/** 
 * Configuration information when authentication mode is FEDERATED.
**/
export class FederationParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationCallBackURL" })
  applicationCallBackUrl?: string;

  @Metadata({ data: "json, name=attributeMap" })
  attributeMap?: Map<string, string>;

  @Metadata({ data: "json, name=federationProviderName" })
  federationProviderName?: string;

  @Metadata({ data: "json, name=federationURN" })
  federationUrn?: string;

  @Metadata({ data: "json, name=samlMetadataDocument" })
  samlMetadataDocument?: string;

  @Metadata({ data: "json, name=samlMetadataURL" })
  samlMetadataUrl?: string;
}

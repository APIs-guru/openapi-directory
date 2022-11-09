import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IotSiteWiseAssetModelPropertyIdentifier
/** 
 *  The asset model property identifer of the input routed from AWS IoT SiteWise. 
**/
export class IotSiteWiseAssetModelPropertyIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @Metadata({ data: "json, name=propertyId" })
  propertyId: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IotSiteWiseAssetModelPropertyIdentifier
/** 
 *  The asset model property identifer of the input routed from AWS IoT SiteWise. 
**/
export class IotSiteWiseAssetModelPropertyIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @SpeakeasyMetadata({ data: "json, name=propertyId" })
  propertyId: string;
}

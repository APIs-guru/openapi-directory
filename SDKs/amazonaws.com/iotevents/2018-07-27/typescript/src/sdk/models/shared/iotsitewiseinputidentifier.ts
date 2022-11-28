import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IotSiteWiseAssetModelPropertyIdentifier } from "./iotsitewiseassetmodelpropertyidentifier";



// IotSiteWiseInputIdentifier
/** 
 *  The identifer of the input routed from AWS IoT SiteWise. 
**/
export class IotSiteWiseInputIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iotSiteWiseAssetModelPropertyIdentifier" })
  iotSiteWiseAssetModelPropertyIdentifier?: IotSiteWiseAssetModelPropertyIdentifier;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IotSiteWiseAssetModelPropertyIdentifier } from "./iotsitewiseassetmodelpropertyidentifier";


// IotSiteWiseInputIdentifier
/** 
 *  The identifer of the input routed from AWS IoT SiteWise. 
**/
export class IotSiteWiseInputIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=iotSiteWiseAssetModelPropertyIdentifier" })
  iotSiteWiseAssetModelPropertyIdentifier?: IotSiteWiseAssetModelPropertyIdentifier;
}

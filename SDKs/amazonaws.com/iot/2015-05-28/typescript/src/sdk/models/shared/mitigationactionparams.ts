import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddThingsToThingGroupParams } from "./addthingstothinggroupparams";
import { EnableIoTLoggingParams } from "./enableiotloggingparams";
import { PublishFindingToSnsParams } from "./publishfindingtosnsparams";
import { ReplaceDefaultPolicyVersionParams } from "./replacedefaultpolicyversionparams";
import { UpdateCaCertificateParams } from "./updatecacertificateparams";
import { UpdateDeviceCertificateParams } from "./updatedevicecertificateparams";



// MitigationActionParams
/** 
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
**/
export class MitigationActionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addThingsToThingGroupParams" })
  addThingsToThingGroupParams?: AddThingsToThingGroupParams;

  @SpeakeasyMetadata({ data: "json, name=enableIoTLoggingParams" })
  enableIoTLoggingParams?: EnableIoTLoggingParams;

  @SpeakeasyMetadata({ data: "json, name=publishFindingToSnsParams" })
  publishFindingToSnsParams?: PublishFindingToSnsParams;

  @SpeakeasyMetadata({ data: "json, name=replaceDefaultPolicyVersionParams" })
  replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;

  @SpeakeasyMetadata({ data: "json, name=updateCACertificateParams" })
  updateCaCertificateParams?: UpdateCaCertificateParams;

  @SpeakeasyMetadata({ data: "json, name=updateDeviceCertificateParams" })
  updateDeviceCertificateParams?: UpdateDeviceCertificateParams;
}

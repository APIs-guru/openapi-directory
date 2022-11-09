import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=addThingsToThingGroupParams" })
  addThingsToThingGroupParams?: AddThingsToThingGroupParams;

  @Metadata({ data: "json, name=enableIoTLoggingParams" })
  enableIoTLoggingParams?: EnableIoTLoggingParams;

  @Metadata({ data: "json, name=publishFindingToSnsParams" })
  publishFindingToSnsParams?: PublishFindingToSnsParams;

  @Metadata({ data: "json, name=replaceDefaultPolicyVersionParams" })
  replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;

  @Metadata({ data: "json, name=updateCACertificateParams" })
  updateCaCertificateParams?: UpdateCaCertificateParams;

  @Metadata({ data: "json, name=updateDeviceCertificateParams" })
  updateDeviceCertificateParams?: UpdateDeviceCertificateParams;
}

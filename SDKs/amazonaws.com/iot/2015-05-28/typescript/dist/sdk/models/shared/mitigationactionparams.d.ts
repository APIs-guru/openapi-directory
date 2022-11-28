import { SpeakeasyBase } from "../../../internal/utils";
import { AddThingsToThingGroupParams } from "./addthingstothinggroupparams";
import { EnableIoTLoggingParams } from "./enableiotloggingparams";
import { PublishFindingToSnsParams } from "./publishfindingtosnsparams";
import { ReplaceDefaultPolicyVersionParams } from "./replacedefaultpolicyversionparams";
import { UpdateCaCertificateParams } from "./updatecacertificateparams";
import { UpdateDeviceCertificateParams } from "./updatedevicecertificateparams";
/**
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
**/
export declare class MitigationActionParams extends SpeakeasyBase {
    addThingsToThingGroupParams?: AddThingsToThingGroupParams;
    enableIoTLoggingParams?: EnableIoTLoggingParams;
    publishFindingToSnsParams?: PublishFindingToSnsParams;
    replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;
    updateCaCertificateParams?: UpdateCaCertificateParams;
    updateDeviceCertificateParams?: UpdateDeviceCertificateParams;
}

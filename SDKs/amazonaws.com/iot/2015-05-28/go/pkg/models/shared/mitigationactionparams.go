package shared

type MitigationActionParams struct {
	AddThingsToThingGroupParams       *AddThingsToThingGroupParams       `json:"addThingsToThingGroupParams"`
	EnableIoTLoggingParams            *EnableIoTLoggingParams            `json:"enableIoTLoggingParams"`
	PublishFindingToSnsParams         *PublishFindingToSnsParams         `json:"publishFindingToSnsParams"`
	ReplaceDefaultPolicyVersionParams *ReplaceDefaultPolicyVersionParams `json:"replaceDefaultPolicyVersionParams"`
	UpdateCaCertificateParams         *UpdateCaCertificateParams         `json:"updateCACertificateParams"`
	UpdateDeviceCertificateParams     *UpdateDeviceCertificateParams     `json:"updateDeviceCertificateParams"`
}

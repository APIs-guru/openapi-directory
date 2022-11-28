package shared

// MitigationActionParams
// The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
type MitigationActionParams struct {
	AddThingsToThingGroupParams       *AddThingsToThingGroupParams       `json:"addThingsToThingGroupParams,omitempty"`
	EnableIoTLoggingParams            *EnableIoTLoggingParams            `json:"enableIoTLoggingParams,omitempty"`
	PublishFindingToSnsParams         *PublishFindingToSnsParams         `json:"publishFindingToSnsParams,omitempty"`
	ReplaceDefaultPolicyVersionParams *ReplaceDefaultPolicyVersionParams `json:"replaceDefaultPolicyVersionParams,omitempty"`
	UpdateCaCertificateParams         *UpdateCaCertificateParams         `json:"updateCACertificateParams,omitempty"`
	UpdateDeviceCertificateParams     *UpdateDeviceCertificateParams     `json:"updateDeviceCertificateParams,omitempty"`
}

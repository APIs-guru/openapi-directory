package shared



type MitigationActionParams struct {
    AddThingsToThingGroupParams *AddThingsToThingGroupParams `json:"addThingsToThingGroupParams,omitempty"`
    EnableIoTLoggingParams *EnableIoTLoggingParams `json:"enableIoTLoggingParams,omitempty"`
    PublishFindingToSnsParams *PublishFindingToSnsParams `json:"publishFindingToSnsParams,omitempty"`
    ReplaceDefaultPolicyVersionParams *ReplaceDefaultPolicyVersionParams `json:"replaceDefaultPolicyVersionParams,omitempty"`
    UpdateCaCertificateParams *UpdateCaCertificateParams `json:"updateCACertificateParams,omitempty"`
    UpdateDeviceCertificateParams *UpdateDeviceCertificateParams `json:"updateDeviceCertificateParams,omitempty"`
    
}


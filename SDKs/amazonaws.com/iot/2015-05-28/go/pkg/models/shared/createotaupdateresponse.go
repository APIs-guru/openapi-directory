package shared



type CreateOtaUpdateResponse struct {
    AwsIotJobArn *string `json:"awsIotJobArn,omitempty"`
    AwsIotJobID *string `json:"awsIotJobId,omitempty"`
    OtaUpdateArn *string `json:"otaUpdateArn,omitempty"`
    OtaUpdateID *string `json:"otaUpdateId,omitempty"`
    OtaUpdateStatus *OtaUpdateStatusEnum `json:"otaUpdateStatus,omitempty"`
    
}


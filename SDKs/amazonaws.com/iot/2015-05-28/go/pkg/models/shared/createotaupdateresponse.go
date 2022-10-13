package shared

type CreateOtaUpdateResponse struct {
	AwsIotJobArn    *string              `json:"awsIotJobArn"`
	AwsIotJobID     *string              `json:"awsIotJobId"`
	OtaUpdateArn    *string              `json:"otaUpdateArn"`
	OtaUpdateID     *string              `json:"otaUpdateId"`
	OtaUpdateStatus *OtaUpdateStatusEnum `json:"otaUpdateStatus"`
}

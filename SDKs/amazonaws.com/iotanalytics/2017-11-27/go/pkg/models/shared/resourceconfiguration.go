package shared

type ResourceConfiguration struct {
	ComputeType    ComputeTypeEnum `json:"computeType"`
	VolumeSizeInGb int64           `json:"volumeSizeInGB"`
}

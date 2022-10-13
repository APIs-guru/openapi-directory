package shared

type VolumeConfiguration struct {
	VolumeBaselineIops       *int64  `json:"volumeBaselineIOPS"`
	VolumeBaselineThroughput *int64  `json:"volumeBaselineThroughput"`
	VolumeBurstIops          *int64  `json:"volumeBurstIOPS"`
	VolumeBurstThroughput    *int64  `json:"volumeBurstThroughput"`
	VolumeSize               *int64  `json:"volumeSize"`
	VolumeType               *string `json:"volumeType"`
}

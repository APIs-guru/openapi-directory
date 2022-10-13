package shared

type DescribeMountTargetsResponse struct {
	Marker       *string                  `json:"Marker"`
	MountTargets []MountTargetDescription `json:"MountTargets"`
	NextMarker   *string                  `json:"NextMarker"`
}

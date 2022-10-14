package shared

type DescribeMountTargetsResponse struct {
	Marker       *string                  `json:"Marker,omitempty"`
	MountTargets []MountTargetDescription `json:"MountTargets,omitempty"`
	NextMarker   *string                  `json:"NextMarker,omitempty"`
}

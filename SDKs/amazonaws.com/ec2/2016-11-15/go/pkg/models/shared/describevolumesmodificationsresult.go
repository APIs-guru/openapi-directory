package shared

type DescribeVolumesModificationsResult struct {
	NextToken            *string
	VolumesModifications []VolumeModification
}

package shared

type DescribeSnapshotAttributeResult struct {
	CreateVolumePermissions []CreateVolumePermission
	ProductCodes            []ProductCode
	SnapshotID              *string
}

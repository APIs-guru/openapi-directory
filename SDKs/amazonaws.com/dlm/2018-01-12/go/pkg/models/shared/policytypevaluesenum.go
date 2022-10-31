package shared

type PolicyTypeValuesEnum string

const (
	PolicyTypeValuesEnumEbsSnapshotManagement PolicyTypeValuesEnum = "EBS_SNAPSHOT_MANAGEMENT"
	PolicyTypeValuesEnumImageManagement       PolicyTypeValuesEnum = "IMAGE_MANAGEMENT"
	PolicyTypeValuesEnumEventBasedPolicy      PolicyTypeValuesEnum = "EVENT_BASED_POLICY"
)

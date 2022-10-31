package shared

type DescribeApplicableIndividualAssessmentsMessage struct {
	Marker                 *string                 `json:"Marker,omitempty"`
	MaxRecords             *int64                  `json:"MaxRecords,omitempty"`
	MigrationType          *MigrationTypeValueEnum `json:"MigrationType,omitempty"`
	ReplicationInstanceArn *string                 `json:"ReplicationInstanceArn,omitempty"`
	ReplicationTaskArn     *string                 `json:"ReplicationTaskArn,omitempty"`
	SourceEngineName       *string                 `json:"SourceEngineName,omitempty"`
	TargetEngineName       *string                 `json:"TargetEngineName,omitempty"`
}

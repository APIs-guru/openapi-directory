package shared

type DescribeApplicableIndividualAssessmentsMessage struct {
	Marker                 *string                 `json:"Marker"`
	MaxRecords             *int64                  `json:"MaxRecords"`
	MigrationType          *MigrationTypeValueEnum `json:"MigrationType"`
	ReplicationInstanceArn *string                 `json:"ReplicationInstanceArn"`
	ReplicationTaskArn     *string                 `json:"ReplicationTaskArn"`
	SourceEngineName       *string                 `json:"SourceEngineName"`
	TargetEngineName       *string                 `json:"TargetEngineName"`
}

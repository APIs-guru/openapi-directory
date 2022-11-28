package shared

// ElasticGpus
// Describes an Elastic Graphics accelerator.
type ElasticGpus struct {
	AvailabilityZone *string
	ElasticGpuHealth *ElasticGpuHealth
	ElasticGpuID     *string
	ElasticGpuState  *ElasticGpuStateEnum
	ElasticGpuType   *string
	InstanceID       *string
	Tags             []Tag
}

package shared

type DescribeElasticGpusResult struct {
	ElasticGpuSet []ElasticGpus
	MaxResults    *int64
	NextToken     *string
}

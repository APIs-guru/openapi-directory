package shared

type DescribeFleetInstancesResult struct {
	ActiveInstances []ActiveInstance
	FleetID         *string
	NextToken       *string
}

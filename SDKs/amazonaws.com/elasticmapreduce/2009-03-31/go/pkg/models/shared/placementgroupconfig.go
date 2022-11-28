package shared

// PlacementGroupConfig
// <p>Placement group configuration for an Amazon EMR cluster. The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.</p> <p>To use this configuration, consider attaching managed policy AmazonElasticMapReducePlacementGroupPolicy to the EMR role.</p>
type PlacementGroupConfig struct {
	InstanceRole      InstanceRoleTypeEnum        `json:"InstanceRole"`
	PlacementStrategy *PlacementGroupStrategyEnum `json:"PlacementStrategy,omitempty"`
}

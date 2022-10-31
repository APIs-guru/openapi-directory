package shared

type AutoScalingPolicy struct {
	Constraints ScalingConstraints `json:"Constraints"`
	Rules       []ScalingRule      `json:"Rules"`
}

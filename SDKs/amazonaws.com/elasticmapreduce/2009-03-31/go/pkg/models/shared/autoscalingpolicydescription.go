package shared

type AutoScalingPolicyDescription struct {
	Constraints *ScalingConstraints      `json:"Constraints"`
	Rules       []ScalingRule            `json:"Rules"`
	Status      *AutoScalingPolicyStatus `json:"Status"`
}

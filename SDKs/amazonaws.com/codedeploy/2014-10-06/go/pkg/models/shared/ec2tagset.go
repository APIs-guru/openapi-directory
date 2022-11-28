package shared

// Ec2TagSet
// Information about groups of EC2 instance tags.
type Ec2TagSet struct {
	Ec2TagSetList [][]Ec2TagFilter `json:"ec2TagSetList,omitempty"`
}

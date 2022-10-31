package shared

type Ec2TagSet struct {
	Ec2TagSetList [][]Ec2TagFilter `json:"ec2TagSetList,omitempty"`
}

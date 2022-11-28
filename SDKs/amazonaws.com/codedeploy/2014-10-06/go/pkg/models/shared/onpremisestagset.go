package shared

// OnPremisesTagSet
// Information about groups of on-premises instance tags.
type OnPremisesTagSet struct {
	OnPremisesTagSetList [][]TagFilter `json:"onPremisesTagSetList,omitempty"`
}

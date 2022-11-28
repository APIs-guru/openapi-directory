package shared

// ImportTaskFilter
// <p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note>
type ImportTaskFilter struct {
	Name   *ImportTaskFilterNameEnum `json:"name,omitempty"`
	Values []string                  `json:"values,omitempty"`
}

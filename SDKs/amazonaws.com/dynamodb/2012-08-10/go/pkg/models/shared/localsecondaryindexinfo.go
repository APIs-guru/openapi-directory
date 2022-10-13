package shared

type LocalSecondaryIndexInfo struct {
	IndexName  *string            `json:"IndexName"`
	KeySchema  []KeySchemaElement `json:"KeySchema"`
	Projection *Projection        `json:"Projection"`
}

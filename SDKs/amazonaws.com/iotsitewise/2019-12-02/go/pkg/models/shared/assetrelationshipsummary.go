package shared

// AssetRelationshipSummary
// Contains information about assets that are related to one another.
type AssetRelationshipSummary struct {
	HierarchyInfo    *AssetHierarchyInfo       `json:"hierarchyInfo,omitempty"`
	RelationshipType AssetRelationshipTypeEnum `json:"relationshipType"`
}

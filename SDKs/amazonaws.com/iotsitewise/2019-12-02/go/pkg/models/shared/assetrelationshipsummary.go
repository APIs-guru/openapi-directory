package shared

type AssetRelationshipSummary struct {
	HierarchyInfo    *AssetHierarchyInfo       `json:"hierarchyInfo"`
	RelationshipType AssetRelationshipTypeEnum `json:"relationshipType"`
}

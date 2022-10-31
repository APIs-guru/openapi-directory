package shared



type AssetRelationshipSummary struct {
    HierarchyInfo *AssetHierarchyInfo `json:"hierarchyInfo,omitempty"`
    RelationshipType AssetRelationshipTypeEnum `json:"relationshipType"`
    
}


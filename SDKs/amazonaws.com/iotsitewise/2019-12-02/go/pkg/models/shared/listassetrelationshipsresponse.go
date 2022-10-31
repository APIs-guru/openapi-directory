package shared



type ListAssetRelationshipsResponse struct {
    AssetRelationshipSummaries []AssetRelationshipSummary `json:"assetRelationshipSummaries"`
    NextToken *string `json:"nextToken,omitempty"`
    
}


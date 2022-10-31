package shared



type ListObjectParentPathsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    PathToObjectIdentifiersList []PathToObjectIdentifiers `json:"PathToObjectIdentifiersList,omitempty"`
    
}


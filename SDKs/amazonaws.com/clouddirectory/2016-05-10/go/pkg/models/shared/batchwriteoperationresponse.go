package shared



type BatchWriteOperationResponse struct {
    AddFacetToObject map[string]interface{} `json:"AddFacetToObject,omitempty"`
    AttachObject *BatchAttachObjectResponse `json:"AttachObject,omitempty"`
    AttachPolicy map[string]interface{} `json:"AttachPolicy,omitempty"`
    AttachToIndex *BatchAttachToIndexResponse `json:"AttachToIndex,omitempty"`
    AttachTypedLink *BatchAttachTypedLinkResponse `json:"AttachTypedLink,omitempty"`
    CreateIndex *BatchCreateIndexResponse `json:"CreateIndex,omitempty"`
    CreateObject *BatchCreateObjectResponse `json:"CreateObject,omitempty"`
    DeleteObject map[string]interface{} `json:"DeleteObject,omitempty"`
    DetachFromIndex *BatchDetachFromIndexResponse `json:"DetachFromIndex,omitempty"`
    DetachObject *BatchDetachObjectResponse `json:"DetachObject,omitempty"`
    DetachPolicy map[string]interface{} `json:"DetachPolicy,omitempty"`
    DetachTypedLink map[string]interface{} `json:"DetachTypedLink,omitempty"`
    RemoveFacetFromObject map[string]interface{} `json:"RemoveFacetFromObject,omitempty"`
    UpdateLinkAttributes map[string]interface{} `json:"UpdateLinkAttributes,omitempty"`
    UpdateObjectAttributes *BatchUpdateObjectAttributesResponse `json:"UpdateObjectAttributes,omitempty"`
    
}


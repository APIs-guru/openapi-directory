package shared

type BatchWriteOperationResponse struct {
	AddFacetToObject       map[string]interface{}               `json:"AddFacetToObject"`
	AttachObject           *BatchAttachObjectResponse           `json:"AttachObject"`
	AttachPolicy           map[string]interface{}               `json:"AttachPolicy"`
	AttachToIndex          *BatchAttachToIndexResponse          `json:"AttachToIndex"`
	AttachTypedLink        *BatchAttachTypedLinkResponse        `json:"AttachTypedLink"`
	CreateIndex            *BatchCreateIndexResponse            `json:"CreateIndex"`
	CreateObject           *BatchCreateObjectResponse           `json:"CreateObject"`
	DeleteObject           map[string]interface{}               `json:"DeleteObject"`
	DetachFromIndex        *BatchDetachFromIndexResponse        `json:"DetachFromIndex"`
	DetachObject           *BatchDetachObjectResponse           `json:"DetachObject"`
	DetachPolicy           map[string]interface{}               `json:"DetachPolicy"`
	DetachTypedLink        map[string]interface{}               `json:"DetachTypedLink"`
	RemoveFacetFromObject  map[string]interface{}               `json:"RemoveFacetFromObject"`
	UpdateLinkAttributes   map[string]interface{}               `json:"UpdateLinkAttributes"`
	UpdateObjectAttributes *BatchUpdateObjectAttributesResponse `json:"UpdateObjectAttributes"`
}

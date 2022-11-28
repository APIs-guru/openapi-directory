package shared

// BatchWriteOperation
// Represents the output of a <code>BatchWrite</code> operation.
type BatchWriteOperation struct {
	AddFacetToObject       *BatchAddFacetToObject       `json:"AddFacetToObject,omitempty"`
	AttachObject           *BatchAttachObject           `json:"AttachObject,omitempty"`
	AttachPolicy           *BatchAttachPolicy           `json:"AttachPolicy,omitempty"`
	AttachToIndex          *BatchAttachToIndex          `json:"AttachToIndex,omitempty"`
	AttachTypedLink        *BatchAttachTypedLink        `json:"AttachTypedLink,omitempty"`
	CreateIndex            *BatchCreateIndex            `json:"CreateIndex,omitempty"`
	CreateObject           *BatchCreateObject           `json:"CreateObject,omitempty"`
	DeleteObject           *BatchDeleteObject           `json:"DeleteObject,omitempty"`
	DetachFromIndex        *BatchDetachFromIndex        `json:"DetachFromIndex,omitempty"`
	DetachObject           *BatchDetachObject           `json:"DetachObject,omitempty"`
	DetachPolicy           *BatchDetachPolicy           `json:"DetachPolicy,omitempty"`
	DetachTypedLink        *BatchDetachTypedLink        `json:"DetachTypedLink,omitempty"`
	RemoveFacetFromObject  *BatchRemoveFacetFromObject  `json:"RemoveFacetFromObject,omitempty"`
	UpdateLinkAttributes   *BatchUpdateLinkAttributes   `json:"UpdateLinkAttributes,omitempty"`
	UpdateObjectAttributes *BatchUpdateObjectAttributes `json:"UpdateObjectAttributes,omitempty"`
}

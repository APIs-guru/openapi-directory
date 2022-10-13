package shared

type BatchWriteOperation struct {
	AddFacetToObject       *BatchAddFacetToObject       `json:"AddFacetToObject"`
	AttachObject           *BatchAttachObject           `json:"AttachObject"`
	AttachPolicy           *BatchAttachPolicy           `json:"AttachPolicy"`
	AttachToIndex          *BatchAttachToIndex          `json:"AttachToIndex"`
	AttachTypedLink        *BatchAttachTypedLink        `json:"AttachTypedLink"`
	CreateIndex            *BatchCreateIndex            `json:"CreateIndex"`
	CreateObject           *BatchCreateObject           `json:"CreateObject"`
	DeleteObject           *BatchDeleteObject           `json:"DeleteObject"`
	DetachFromIndex        *BatchDetachFromIndex        `json:"DetachFromIndex"`
	DetachObject           *BatchDetachObject           `json:"DetachObject"`
	DetachPolicy           *BatchDetachPolicy           `json:"DetachPolicy"`
	DetachTypedLink        *BatchDetachTypedLink        `json:"DetachTypedLink"`
	RemoveFacetFromObject  *BatchRemoveFacetFromObject  `json:"RemoveFacetFromObject"`
	UpdateLinkAttributes   *BatchUpdateLinkAttributes   `json:"UpdateLinkAttributes"`
	UpdateObjectAttributes *BatchUpdateObjectAttributes `json:"UpdateObjectAttributes"`
}

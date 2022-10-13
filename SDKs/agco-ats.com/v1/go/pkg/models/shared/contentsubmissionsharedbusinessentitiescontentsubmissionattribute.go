package shared

type ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute struct {
	ContentSubmissionID *int32  `json:"ContentSubmissionID" form:"name=ContentSubmissionID"`
	ID                  *int32  `json:"ID" form:"name=ID"`
	Name                string  `json:"Name" form:"name=Name"`
	Value               *string `json:"Value" form:"name=Value"`
}

package shared



type ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute struct {
    ContentSubmissionID *int32 `json:"ContentSubmissionID,omitempty" form:"name=ContentSubmissionID"`
    ID *int32 `json:"ID,omitempty" form:"name=ID"`
    Name string `json:"Name" form:"name=Name"`
    Value *string `json:"Value,omitempty" form:"name=Value"`
    
}


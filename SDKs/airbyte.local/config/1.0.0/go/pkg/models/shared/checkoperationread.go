package shared




type CheckOperationReadStatusEnum string

const (
    CheckOperationReadStatusEnumSucceeded CheckOperationReadStatusEnum = "succeeded"
CheckOperationReadStatusEnumFailed CheckOperationReadStatusEnum = "failed"
)


type CheckOperationRead struct {
    Message *string `json:"message,omitempty"`
    Status CheckOperationReadStatusEnum `json:"status"`
    
}


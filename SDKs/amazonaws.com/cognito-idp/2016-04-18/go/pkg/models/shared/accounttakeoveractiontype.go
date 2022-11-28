package shared

// AccountTakeoverActionType
// Account takeover action type.
type AccountTakeoverActionType struct {
	EventAction AccountTakeoverEventActionTypeEnum `json:"EventAction"`
	Notify      bool                               `json:"Notify"`
}

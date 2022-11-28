package shared

// AccountTakeoverActionsType
// Account takeover actions type.
type AccountTakeoverActionsType struct {
	HighAction   *AccountTakeoverActionType `json:"HighAction,omitempty"`
	LowAction    *AccountTakeoverActionType `json:"LowAction,omitempty"`
	MediumAction *AccountTakeoverActionType `json:"MediumAction,omitempty"`
}

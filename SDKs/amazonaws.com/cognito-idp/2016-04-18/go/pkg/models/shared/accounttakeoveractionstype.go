package shared

type AccountTakeoverActionsType struct {
	HighAction   *AccountTakeoverActionType `json:"HighAction"`
	LowAction    *AccountTakeoverActionType `json:"LowAction"`
	MediumAction *AccountTakeoverActionType `json:"MediumAction"`
}

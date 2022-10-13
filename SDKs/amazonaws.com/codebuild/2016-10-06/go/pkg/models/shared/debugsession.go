package shared

type DebugSession struct {
	SessionEnabled *bool   `json:"sessionEnabled"`
	SessionTarget  *string `json:"sessionTarget"`
}

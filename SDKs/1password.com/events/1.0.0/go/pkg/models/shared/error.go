package shared

type ErrorError struct {
	Message *string `json:"Message,omitempty"`
}

type Error struct {
	Error *ErrorError `json:"Error,omitempty"`
}

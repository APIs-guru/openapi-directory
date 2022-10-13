package shared

type ErrorError struct {
	Message *string `json:"Message"`
}

type Error struct {
	Error *ErrorError `json:"Error"`
}

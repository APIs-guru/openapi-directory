package shared

// DecimalNumber
// Contains a numeric value in decimal format.
type DecimalNumber struct {
	Scale         int64  `json:"Scale"`
	UnscaledValue string `json:"UnscaledValue"`
}

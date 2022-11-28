package shared

// TokenValidityUnitsType
// The data type for TokenValidityUnits that specifics the time measurements for token validity.
type TokenValidityUnitsType struct {
	AccessToken  *TimeUnitsTypeEnum `json:"AccessToken,omitempty"`
	IDToken      *TimeUnitsTypeEnum `json:"IdToken,omitempty"`
	RefreshToken *TimeUnitsTypeEnum `json:"RefreshToken,omitempty"`
}

package shared

type TokenValidityUnitsType struct {
	AccessToken  *TimeUnitsTypeEnum `json:"AccessToken,omitempty"`
	IDToken      *TimeUnitsTypeEnum `json:"IdToken,omitempty"`
	RefreshToken *TimeUnitsTypeEnum `json:"RefreshToken,omitempty"`
}

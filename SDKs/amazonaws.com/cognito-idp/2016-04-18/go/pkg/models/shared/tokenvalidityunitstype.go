package shared

type TokenValidityUnitsType struct {
	AccessToken  *TimeUnitsTypeEnum `json:"AccessToken"`
	IDToken      *TimeUnitsTypeEnum `json:"IdToken"`
	RefreshToken *TimeUnitsTypeEnum `json:"RefreshToken"`
}

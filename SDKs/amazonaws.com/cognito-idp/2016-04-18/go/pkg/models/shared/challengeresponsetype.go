package shared

type ChallengeResponseType struct {
	ChallengeName     *ChallengeNameEnum     `json:"ChallengeName"`
	ChallengeResponse *ChallengeResponseEnum `json:"ChallengeResponse"`
}

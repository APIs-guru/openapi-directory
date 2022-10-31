package shared



type ChallengeResponseType struct {
    ChallengeName *ChallengeNameEnum `json:"ChallengeName,omitempty"`
    ChallengeResponse *ChallengeResponseEnum `json:"ChallengeResponse,omitempty"`
    
}


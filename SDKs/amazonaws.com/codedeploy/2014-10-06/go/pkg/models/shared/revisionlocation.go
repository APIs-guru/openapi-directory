package shared

type RevisionLocation struct {
	AppSpecContent *AppSpecContent           `json:"appSpecContent"`
	GitHubLocation *GitHubLocation           `json:"gitHubLocation"`
	RevisionType   *RevisionLocationTypeEnum `json:"revisionType"`
	S3Location     *S3Location               `json:"s3Location"`
	String         *RawString                `json:"string"`
}

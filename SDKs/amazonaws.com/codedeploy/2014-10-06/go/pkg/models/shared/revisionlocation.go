package shared

type RevisionLocation struct {
	AppSpecContent *AppSpecContent           `json:"appSpecContent,omitempty"`
	GitHubLocation *GitHubLocation           `json:"gitHubLocation,omitempty"`
	RevisionType   *RevisionLocationTypeEnum `json:"revisionType,omitempty"`
	S3Location     *S3Location               `json:"s3Location,omitempty"`
	String         *RawString                `json:"string,omitempty"`
}

package shared

type BuildArtifacts struct {
	ArtifactIdentifier   *string                `json:"artifactIdentifier,omitempty"`
	BucketOwnerAccess    *BucketOwnerAccessEnum `json:"bucketOwnerAccess,omitempty"`
	EncryptionDisabled   *bool                  `json:"encryptionDisabled,omitempty"`
	Location             *string                `json:"location,omitempty"`
	Md5sum               *string                `json:"md5sum,omitempty"`
	OverrideArtifactName *bool                  `json:"overrideArtifactName,omitempty"`
	Sha256sum            *string                `json:"sha256sum,omitempty"`
}

package shared

type BuildArtifacts struct {
	ArtifactIdentifier   *string                `json:"artifactIdentifier"`
	BucketOwnerAccess    *BucketOwnerAccessEnum `json:"bucketOwnerAccess"`
	EncryptionDisabled   *bool                  `json:"encryptionDisabled"`
	Location             *string                `json:"location"`
	Md5sum               *string                `json:"md5sum"`
	OverrideArtifactName *bool                  `json:"overrideArtifactName"`
	Sha256sum            *string                `json:"sha256sum"`
}

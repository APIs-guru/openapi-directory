package shared

type ProjectArtifacts struct {
	ArtifactIdentifier   *string                `json:"artifactIdentifier"`
	BucketOwnerAccess    *BucketOwnerAccessEnum `json:"bucketOwnerAccess"`
	EncryptionDisabled   *bool                  `json:"encryptionDisabled"`
	Location             *string                `json:"location"`
	Name                 *string                `json:"name"`
	NamespaceType        *ArtifactNamespaceEnum `json:"namespaceType"`
	OverrideArtifactName *bool                  `json:"overrideArtifactName"`
	Packaging            *ArtifactPackagingEnum `json:"packaging"`
	Path                 *string                `json:"path"`
	Type                 ArtifactsTypeEnum      `json:"type"`
}

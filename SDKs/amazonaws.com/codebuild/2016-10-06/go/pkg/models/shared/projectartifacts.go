package shared

type ProjectArtifacts struct {
	ArtifactIdentifier   *string                `json:"artifactIdentifier,omitempty"`
	BucketOwnerAccess    *BucketOwnerAccessEnum `json:"bucketOwnerAccess,omitempty"`
	EncryptionDisabled   *bool                  `json:"encryptionDisabled,omitempty"`
	Location             *string                `json:"location,omitempty"`
	Name                 *string                `json:"name,omitempty"`
	NamespaceType        *ArtifactNamespaceEnum `json:"namespaceType,omitempty"`
	OverrideArtifactName *bool                  `json:"overrideArtifactName,omitempty"`
	Packaging            *ArtifactPackagingEnum `json:"packaging,omitempty"`
	Path                 *string                `json:"path,omitempty"`
	Type                 ArtifactsTypeEnum      `json:"type"`
}

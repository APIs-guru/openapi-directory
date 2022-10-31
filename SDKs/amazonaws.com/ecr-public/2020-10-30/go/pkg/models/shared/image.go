package shared



type Image struct {
    ImageID *ImageIdentifier `json:"imageId,omitempty"`
    ImageManifest *string `json:"imageManifest,omitempty"`
    ImageManifestMediaType *string `json:"imageManifestMediaType,omitempty"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName *string `json:"repositoryName,omitempty"`
    
}


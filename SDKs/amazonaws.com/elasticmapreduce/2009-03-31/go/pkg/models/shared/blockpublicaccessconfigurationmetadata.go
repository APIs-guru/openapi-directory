package shared

import (
	"time"
)

// BlockPublicAccessConfigurationMetadata
// Properties that describe the Amazon Web Services principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.
type BlockPublicAccessConfigurationMetadata struct {
	CreatedByArn     string    `json:"CreatedByArn"`
	CreationDateTime time.Time `json:"CreationDateTime"`
}

package shared

// PipelineActivity
// An activity that performs a transformation on a message.
type PipelineActivity struct {
	AddAttributes        *AddAttributesActivity        `json:"addAttributes,omitempty"`
	Channel              *ChannelActivity              `json:"channel,omitempty"`
	Datastore            *DatastoreActivity            `json:"datastore,omitempty"`
	DeviceRegistryEnrich *DeviceRegistryEnrichActivity `json:"deviceRegistryEnrich,omitempty"`
	DeviceShadowEnrich   *DeviceShadowEnrichActivity   `json:"deviceShadowEnrich,omitempty"`
	Filter               *FilterActivity               `json:"filter,omitempty"`
	Lambda               *LambdaActivity               `json:"lambda,omitempty"`
	Math                 *MathActivity                 `json:"math,omitempty"`
	RemoveAttributes     *RemoveAttributesActivity     `json:"removeAttributes,omitempty"`
	SelectAttributes     *SelectAttributesActivity     `json:"selectAttributes,omitempty"`
}

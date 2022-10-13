package shared

type PipelineActivity struct {
	AddAttributes        *AddAttributesActivity        `json:"addAttributes"`
	Channel              *ChannelActivity              `json:"channel"`
	Datastore            *DatastoreActivity            `json:"datastore"`
	DeviceRegistryEnrich *DeviceRegistryEnrichActivity `json:"deviceRegistryEnrich"`
	DeviceShadowEnrich   *DeviceShadowEnrichActivity   `json:"deviceShadowEnrich"`
	Filter               *FilterActivity               `json:"filter"`
	Lambda               *LambdaActivity               `json:"lambda"`
	Math                 *MathActivity                 `json:"math"`
	RemoveAttributes     *RemoveAttributesActivity     `json:"removeAttributes"`
	SelectAttributes     *SelectAttributesActivity     `json:"selectAttributes"`
}

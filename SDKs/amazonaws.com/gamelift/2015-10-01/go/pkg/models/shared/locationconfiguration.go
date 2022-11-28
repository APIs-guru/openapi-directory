package shared

// LocationConfiguration
// <p>A remote location where a multi-location fleet can deploy EC2 instances for game hosting. </p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> </p>
type LocationConfiguration struct {
	Location *string `json:"Location,omitempty"`
}

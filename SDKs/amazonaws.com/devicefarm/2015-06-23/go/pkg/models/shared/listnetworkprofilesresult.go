package shared

type ListNetworkProfilesResult struct {
	NetworkProfiles []NetworkProfile `json:"networkProfiles"`
	NextToken       *string          `json:"nextToken"`
}

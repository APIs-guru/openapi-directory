package shared

// PullRequestStatusChangedEventMetadata
// Information about a change to the status of a pull request.
type PullRequestStatusChangedEventMetadata struct {
	PullRequestStatus *PullRequestStatusEnumEnum `json:"pullRequestStatus,omitempty"`
}

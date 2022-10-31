package shared

type DeleteWorkGroupInput struct {
	RecursiveDeleteOption *bool  `json:"RecursiveDeleteOption,omitempty"`
	WorkGroup             string `json:"WorkGroup"`
}

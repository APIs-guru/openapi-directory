package shared

type DeleteWorkGroupInput struct {
	RecursiveDeleteOption *bool  `json:"RecursiveDeleteOption"`
	WorkGroup             string `json:"WorkGroup"`
}

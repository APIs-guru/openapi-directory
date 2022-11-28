package shared

// ListAvailableSolutionStacksResultMessage
// A list of available AWS Elastic Beanstalk solution stacks.
type ListAvailableSolutionStacksResultMessage struct {
	SolutionStackDetails []SolutionStackDescription
	SolutionStacks       []string
}

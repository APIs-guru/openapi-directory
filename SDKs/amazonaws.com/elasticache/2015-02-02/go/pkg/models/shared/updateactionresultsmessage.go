package shared

type UpdateActionResultsMessage struct {
	ProcessedUpdateActions   []ProcessedUpdateAction
	UnprocessedUpdateActions []UnprocessedUpdateAction
}

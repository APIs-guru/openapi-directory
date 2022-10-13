package shared

type ListThingRegistrationTaskReportsResponse struct {
	NextToken     *string         `json:"nextToken"`
	ReportType    *ReportTypeEnum `json:"reportType"`
	ResourceLinks []string        `json:"resourceLinks"`
}

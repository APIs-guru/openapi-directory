package shared

type ApplicationVersionStatusEnum string

const (
	ApplicationVersionStatusEnumProcessed   ApplicationVersionStatusEnum = "Processed"
	ApplicationVersionStatusEnumUnprocessed ApplicationVersionStatusEnum = "Unprocessed"
	ApplicationVersionStatusEnumFailed      ApplicationVersionStatusEnum = "Failed"
	ApplicationVersionStatusEnumProcessing  ApplicationVersionStatusEnum = "Processing"
	ApplicationVersionStatusEnumBuilding    ApplicationVersionStatusEnum = "Building"
)

package shared

type FleetStatusEnum string

const (
	FleetStatusEnumNew         FleetStatusEnum = "NEW"
	FleetStatusEnumDownloading FleetStatusEnum = "DOWNLOADING"
	FleetStatusEnumValidating  FleetStatusEnum = "VALIDATING"
	FleetStatusEnumBuilding    FleetStatusEnum = "BUILDING"
	FleetStatusEnumActivating  FleetStatusEnum = "ACTIVATING"
	FleetStatusEnumActive      FleetStatusEnum = "ACTIVE"
	FleetStatusEnumDeleting    FleetStatusEnum = "DELETING"
	FleetStatusEnumError       FleetStatusEnum = "ERROR"
	FleetStatusEnumTerminated  FleetStatusEnum = "TERMINATED"
)

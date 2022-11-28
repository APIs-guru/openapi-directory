package shared

type DeleteFleetErrorCodeEnum string

const (
	DeleteFleetErrorCodeEnumFleetIDDoesNotExist      DeleteFleetErrorCodeEnum = "fleetIdDoesNotExist"
	DeleteFleetErrorCodeEnumFleetIDMalformed         DeleteFleetErrorCodeEnum = "fleetIdMalformed"
	DeleteFleetErrorCodeEnumFleetNotInDeletableState DeleteFleetErrorCodeEnum = "fleetNotInDeletableState"
	DeleteFleetErrorCodeEnumUnexpectedError          DeleteFleetErrorCodeEnum = "unexpectedError"
)

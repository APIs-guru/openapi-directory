

export enum ErrorCategoryEnum {
    TheInputsToThisRequestAreInvalid = "The_inputs_to_this_request_are_invalid"
,    ServiceLimitsHaveBeenExceeded = "Service_limits_have_been_exceeded"
,    MissingRequiredPermissionToPerformThisRequest = "Missing_required_permission_to_perform_this_request"
,    OneOrMoreInputsToThisRequestWereNotFound = "One_or_more_inputs_to_this_request_were_not_found"
,    TheSystemTemporarilyLacksSufficientResourcesToProcessTheRequest = "The_system_temporarily_lacks_sufficient_resources_to_process_the_request"
,    AnInternalErrorHasOccurred = "An_internal_error_has_occurred"
,    Cancelled = "Cancelled"
,    AUserRecoverableErrorHasOccurred = "A_user_recoverable_error_has_occurred"
}

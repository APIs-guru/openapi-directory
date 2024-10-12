# EnumCheckResultState

Check state for an individual data point - \"UNCHECKED\": Check has not yet been performed - \"NOT_SUPPORTED\": the requested check type or industry function is not supported by this connector. - \"CHECKING\": Checks are underway.  - \"UNPROCESSABLE\": The data supplied was unprocessable.  - \"NO_MATCH\": All checks complete, no records found that matched the details supplied - \"CHECKED_PARTIAL_SUCCESS\": All checks complete, but only some succeeded. - \"CHECKED_SUCCESS_WITH_NOTES\": All checks complete, but there are some notes (e.g. PEP or sanctions). - \"CHECKED_SUCCESS_CLEAR\": All checks complete, no additional notes - \"CHECKED_FAILED\": All checks complete, but all failed. 

## Enum

* `UNCHECKED` (value: `'UNCHECKED'`)

* `CHECKING` (value: `'CHECKING'`)

* `UNPROCESSABLE` (value: `'UNPROCESSABLE'`)

* `NOT_SUPPORTED` (value: `'NOT_SUPPORTED'`)

* `NO_MATCH` (value: `'NO_MATCH'`)

* `CHECKED_PARTIAL_SUCCESS` (value: `'CHECKED_PARTIAL_SUCCESS'`)

* `CHECKED_SUCCESS_WITH_NOTES` (value: `'CHECKED_SUCCESS_WITH_NOTES'`)

* `CHECKED_SUCCESS_CLEAR` (value: `'CHECKED_SUCCESS_CLEAR'`)

* `CHECKED_FAILED` (value: `'CHECKED_FAILED'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



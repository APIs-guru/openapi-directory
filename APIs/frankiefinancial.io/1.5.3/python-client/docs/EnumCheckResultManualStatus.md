# EnumCheckResultManualStatus

Indicates the status of a check result as set by a user. - \"UNKNOWN\": The user has not decided so the actual check result applies as normal. - \"TRUE_POSITIVE\": The check result has been acknowledged as correct but the final effect (accept/reject) has not been decided. - \"TRUE_POSITIVE_ACCEPT\": The check result is correct but will be ignored. This is also known as 'whitelisting' - \"TRUE_POSITIVE_REJECT\": The check result is correct and will be used. - \"FALSE_POSITIVE\": The check result is not applicable and will be ignored. - \"STALE\": The check result will become invisible, will not be considered   and will not count towards due diligence requirements. 

## Enum

* `UNKNOWN` (value: `'UNKNOWN'`)

* `TRUE_POSITIVE` (value: `'TRUE_POSITIVE'`)

* `TRUE_POSITIVE_ACCEPT` (value: `'TRUE_POSITIVE_ACCEPT'`)

* `TRUE_POSITIVE_REJECT` (value: `'TRUE_POSITIVE_REJECT'`)

* `FALSE_POSITIVE` (value: `'FALSE_POSITIVE'`)

* `STALE` (value: `'STALE'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



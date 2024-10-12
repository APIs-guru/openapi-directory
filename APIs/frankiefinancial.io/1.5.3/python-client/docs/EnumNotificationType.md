# EnumNotificationType

Indicates the type of notification being pushed. - \"FUNCTION\": A request that you previously backgrounded has completed and this is the notification that is it complete (success is another matter) - \"RESULT\": Like the FUNCTION notification, this tells you that a previously backgrounded request has completed, and that there is a set of results in the payload pointer. - \"EVENT\": There has been a stateful change in a document, entity or some other piece of data that we are holding/monitoring for you. This is an indication that you may wish to take some action. - \"ALERT\": Like the EVENT, except that the severity of the notification indicates that action is almost certainly required. 

## Enum

* `FUNCTION` (value: `'FUNCTION'`)

* `RESULT` (value: `'RESULT'`)

* `EVENT` (value: `'EVENT'`)

* `ALERT` (value: `'ALERT'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



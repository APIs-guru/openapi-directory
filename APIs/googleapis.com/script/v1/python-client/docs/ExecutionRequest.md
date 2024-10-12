# ExecutionRequest

A request to run the function in a script. The script is identified by the specified `script_id`. Executing a function on a script returns results based on the implementation of the script.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dev_mode** | **bool** | If &#x60;true&#x60; and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Apps Script API. Optional; default is &#x60;false&#x60;. | [optional] 
**function** | **str** | The name of the function to execute in the given script. The name does not include parentheses or parameters. It can reference a function in an included library such as &#x60;Library.libFunction1&#x60;. | [optional] 
**parameters** | **List[object]** | The parameters to be passed to the function being executed. The object type for each parameter should match the expected type in Apps Script. Parameters cannot be Apps Script-specific object types (such as a &#x60;Document&#x60; or a &#x60;Calendar&#x60;); they can only be primitive types such as &#x60;string&#x60;, &#x60;number&#x60;, &#x60;array&#x60;, &#x60;object&#x60;, or &#x60;boolean&#x60;. Optional. | [optional] 
**session_state** | **str** | *Deprecated*. For use with Android add-ons only. An ID that represents the user&#39;s current session in the Android app for Google Docs or Sheets, included as extra data in the [Intent](https://developer.android.com/guide/components/intents-filters.html) that launches the add-on. When an Android add-on is run with a session state, it gains the privileges of a [bound](https://developers.google.com/apps-script/guides/bound) script—that is, it can access information like the user&#39;s current cursor position (in Docs) or selected cell (in Sheets). To retrieve the state, call &#x60;Intent.getStringExtra(\&quot;com.google.android.apps.docs.addons.SessionState\&quot;)&#x60;. Optional. | [optional] 

## Example

```python
from openapi_client.models.execution_request import ExecutionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionRequest from a JSON string
execution_request_instance = ExecutionRequest.from_json(json)
# print the JSON string representation of the object
print(ExecutionRequest.to_json())

# convert the object into a dict
execution_request_dict = execution_request_instance.to_dict()
# create an instance of ExecutionRequest from a dict
execution_request_from_dict = ExecutionRequest.from_dict(execution_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



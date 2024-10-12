# ListResponse

Response message for the List call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_string** | **str** | Human-readable message containing information intended to help end users understand, reproduce and debug the result. The message will be in English and we are currently not planning to offer any translations. Please note that no guarantees are made about the contents or format of this string. Any aspect of it may be subject to change without notice. You should not attempt to programmatically parse this data. For programmatic access, use the error_code field below. | [optional] 
**error_code** | **List[str]** | Error codes that describe the result of the List operation. | [optional] 
**max_age** | **str** | From serving time, how much longer the response should be considered valid barring further updates. REQUIRED | [optional] 
**statements** | [**List[Statement]**](Statement.md) | A list of all the matching statements that have been found. | [optional] 

## Example

```python
from openapi_client.models.list_response import ListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListResponse from a JSON string
list_response_instance = ListResponse.from_json(json)
# print the JSON string representation of the object
print(ListResponse.to_json())

# convert the object into a dict
list_response_dict = list_response_instance.to_dict()
# create an instance of ListResponse from a dict
list_response_from_dict = ListResponse.from_dict(list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



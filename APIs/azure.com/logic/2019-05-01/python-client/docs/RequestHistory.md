# RequestHistory

The request history.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RequestHistoryProperties**](RequestHistoryProperties.md) |  | [optional] 
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.request_history import RequestHistory

# TODO update the JSON string below
json = "{}"
# create an instance of RequestHistory from a JSON string
request_history_instance = RequestHistory.from_json(json)
# print the JSON string representation of the object
print(RequestHistory.to_json())

# convert the object into a dict
request_history_dict = request_history_instance.to_dict()
# create an instance of RequestHistory from a dict
request_history_from_dict = RequestHistory.from_dict(request_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



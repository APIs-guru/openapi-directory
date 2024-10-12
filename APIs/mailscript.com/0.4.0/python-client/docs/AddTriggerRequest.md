# AddTriggerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | [**AddTriggerRequestCriteria**](AddTriggerRequestCriteria.md) |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.add_trigger_request import AddTriggerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddTriggerRequest from a JSON string
add_trigger_request_instance = AddTriggerRequest.from_json(json)
# print the JSON string representation of the object
print(AddTriggerRequest.to_json())

# convert the object into a dict
add_trigger_request_dict = add_trigger_request_instance.to_dict()
# create an instance of AddTriggerRequest from a dict
add_trigger_request_from_dict = AddTriggerRequest.from_dict(add_trigger_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RejectsList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**include_expired** | **bool** |  | [optional] 
**key** | **str** |  | [optional] 
**subaccount** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.rejects_list import RejectsList

# TODO update the JSON string below
json = "{}"
# create an instance of RejectsList from a JSON string
rejects_list_instance = RejectsList.from_json(json)
# print the JSON string representation of the object
print(RejectsList.to_json())

# convert the object into a dict
rejects_list_dict = rejects_list_instance.to_dict()
# create an instance of RejectsList from a dict
rejects_list_from_dict = RejectsList.from_dict(rejects_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



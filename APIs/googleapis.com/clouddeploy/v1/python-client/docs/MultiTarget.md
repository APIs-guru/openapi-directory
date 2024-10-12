# MultiTarget

Information specifying a multiTarget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_ids** | **List[str]** | Required. The target_ids of this multiTarget. | [optional] 

## Example

```python
from openapi_client.models.multi_target import MultiTarget

# TODO update the JSON string below
json = "{}"
# create an instance of MultiTarget from a JSON string
multi_target_instance = MultiTarget.from_json(json)
# print the JSON string representation of the object
print(MultiTarget.to_json())

# convert the object into a dict
multi_target_dict = multi_target_instance.to_dict()
# create an instance of MultiTarget from a dict
multi_target_from_dict = MultiTarget.from_dict(multi_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SharedLinkTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for an object. | [readonly] 
**name** | **str** | The name of the file | [optional] 
**type** | [**FileType**](FileType.md) |  | [optional] 

## Example

```python
from openapi_client.models.shared_link_target import SharedLinkTarget

# TODO update the JSON string below
json = "{}"
# create an instance of SharedLinkTarget from a JSON string
shared_link_target_instance = SharedLinkTarget.from_json(json)
# print the JSON string representation of the object
print(SharedLinkTarget.to_json())

# convert the object into a dict
shared_link_target_dict = shared_link_target_instance.to_dict()
# create an instance of SharedLinkTarget from a dict
shared_link_target_from_dict = SharedLinkTarget.from_dict(shared_link_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CopyResourcesRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_resource** | **str** | Resource identifier for folder where items will be copied to. | 
**resources** | **List[str]** | Resource identifier(s) of items to be copied to a new location | 

## Example

```python
from openapi_client.models.copy_resources_request_body import CopyResourcesRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CopyResourcesRequestBody from a JSON string
copy_resources_request_body_instance = CopyResourcesRequestBody.from_json(json)
# print the JSON string representation of the object
print(CopyResourcesRequestBody.to_json())

# convert the object into a dict
copy_resources_request_body_dict = copy_resources_request_body_instance.to_dict()
# create an instance of CopyResourcesRequestBody from a dict
copy_resources_request_body_from_dict = CopyResourcesRequestBody.from_dict(copy_resources_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



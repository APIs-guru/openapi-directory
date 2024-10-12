# DeleteResourcesRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | **List[str]** | Resource identifiers of items to delete. | 

## Example

```python
from openapi_client.models.delete_resources_request_body import DeleteResourcesRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteResourcesRequestBody from a JSON string
delete_resources_request_body_instance = DeleteResourcesRequestBody.from_json(json)
# print the JSON string representation of the object
print(DeleteResourcesRequestBody.to_json())

# convert the object into a dict
delete_resources_request_body_dict = delete_resources_request_body_instance.to_dict()
# create an instance of DeleteResourcesRequestBody from a dict
delete_resources_request_body_from_dict = DeleteResourcesRequestBody.from_dict(delete_resources_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



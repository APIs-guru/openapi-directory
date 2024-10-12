# UpdateResourceByIdRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The new name for the resource (file or folder). | [optional] 

## Example

```python
from openapi_client.models.update_resource_by_id_request_body import UpdateResourceByIdRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateResourceByIdRequestBody from a JSON string
update_resource_by_id_request_body_instance = UpdateResourceByIdRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateResourceByIdRequestBody.to_json())

# convert the object into a dict
update_resource_by_id_request_body_dict = update_resource_by_id_request_body_instance.to_dict()
# create an instance of UpdateResourceByIdRequestBody from a dict
update_resource_by_id_request_body_from_dict = UpdateResourceByIdRequestBody.from_dict(update_resource_by_id_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



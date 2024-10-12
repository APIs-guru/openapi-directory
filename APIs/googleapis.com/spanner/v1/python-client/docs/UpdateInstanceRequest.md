# UpdateInstanceRequest

The request for UpdateInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_mask** | **str** | Required. A mask specifying which fields in Instance should be updated. The field mask must always be specified; this prevents any future fields in Instance from being erased accidentally by clients that do not know about them. | [optional] 
**instance** | [**Instance**](Instance.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_instance_request import UpdateInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInstanceRequest from a JSON string
update_instance_request_instance = UpdateInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateInstanceRequest.to_json())

# convert the object into a dict
update_instance_request_dict = update_instance_request_instance.to_dict()
# create an instance of UpdateInstanceRequest from a dict
update_instance_request_from_dict = UpdateInstanceRequest.from_dict(update_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



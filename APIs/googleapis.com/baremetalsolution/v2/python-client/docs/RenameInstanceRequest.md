# RenameInstanceRequest

Message requesting rename of a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_instance_id** | **str** | Required. The new &#x60;id&#x60; of the instance. | [optional] 

## Example

```python
from openapi_client.models.rename_instance_request import RenameInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RenameInstanceRequest from a JSON string
rename_instance_request_instance = RenameInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(RenameInstanceRequest.to_json())

# convert the object into a dict
rename_instance_request_dict = rename_instance_request_instance.to_dict()
# create an instance of RenameInstanceRequest from a dict
rename_instance_request_from_dict = RenameInstanceRequest.from_dict(rename_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CreateInstanceRequest

The request for CreateInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | [**Instance**](Instance.md) |  | [optional] 
**instance_id** | **str** | Required. The ID of the instance to create. Valid identifiers are of the form &#x60;a-z*[a-z0-9]&#x60; and must be between 2 and 64 characters in length. | [optional] 

## Example

```python
from openapi_client.models.create_instance_request import CreateInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInstanceRequest from a JSON string
create_instance_request_instance = CreateInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateInstanceRequest.to_json())

# convert the object into a dict
create_instance_request_dict = create_instance_request_instance.to_dict()
# create an instance of CreateInstanceRequest from a dict
create_instance_request_from_dict = CreateInstanceRequest.from_dict(create_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



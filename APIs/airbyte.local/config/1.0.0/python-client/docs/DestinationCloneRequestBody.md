# DestinationCloneRequestBody

The values required to configure the destination. The schema for this should have an id of the existing destination along with the configuration you want to change in case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_clone_id** | **str** |  | 
**destination_configuration** | [**DestinationCloneConfiguration**](DestinationCloneConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.destination_clone_request_body import DestinationCloneRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationCloneRequestBody from a JSON string
destination_clone_request_body_instance = DestinationCloneRequestBody.from_json(json)
# print the JSON string representation of the object
print(DestinationCloneRequestBody.to_json())

# convert the object into a dict
destination_clone_request_body_dict = destination_clone_request_body_instance.to_dict()
# create an instance of DestinationCloneRequestBody from a dict
destination_clone_request_body_from_dict = DestinationCloneRequestBody.from_dict(destination_clone_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



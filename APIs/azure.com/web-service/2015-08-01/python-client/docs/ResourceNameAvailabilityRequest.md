# ResourceNameAvailabilityRequest

Resource name availability request content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_fqdn** | **bool** | Is fully qualified domain name | [optional] 
**name** | **str** | Resource name to verify | [optional] 
**type** | **str** | Resource type used for verification | [optional] 

## Example

```python
from openapi_client.models.resource_name_availability_request import ResourceNameAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceNameAvailabilityRequest from a JSON string
resource_name_availability_request_instance = ResourceNameAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(ResourceNameAvailabilityRequest.to_json())

# convert the object into a dict
resource_name_availability_request_dict = resource_name_availability_request_instance.to_dict()
# create an instance of ResourceNameAvailabilityRequest from a dict
resource_name_availability_request_from_dict = ResourceNameAvailabilityRequest.from_dict(resource_name_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ResourceNameAvailability

Describes if a resource name is available

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**name_available** | **bool** | True indicates name is valid and available.  False indicates the name is invalid, unavailable, or both. | [optional] 
**reason** | **str** | Required if nameAvailable is false. &#39;Invalid&#39; indicates the name provided does not match Azure WebApp service’s naming requirements. &#39;AlreadyExists&#39; indicates that the name is already in use and is therefore unavailable. | [optional] 

## Example

```python
from openapi_client.models.resource_name_availability import ResourceNameAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceNameAvailability from a JSON string
resource_name_availability_instance = ResourceNameAvailability.from_json(json)
# print the JSON string representation of the object
print(ResourceNameAvailability.to_json())

# convert the object into a dict
resource_name_availability_dict = resource_name_availability_instance.to_dict()
# create an instance of ResourceNameAvailability from a dict
resource_name_availability_from_dict = ResourceNameAvailability.from_dict(resource_name_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EntityCheckDetailsObject

Contains all the details we'll check regarding an Entity. It is assumed that this will grow over time.  Current supported check parameters:    - entity: The Entity we're checking. This must be supplied.   - deviceCheckDetails: |     An optional array of parameters for us to check the device and biometric characteristics against. This may map to a session key or device identifier, along with additional information that we can use to check against services like ThreatMetrix, BioCatch (or whatever has been configured for the Customer) 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_check_details** | [**List[DeviceCheckDetailsObject]**](DeviceCheckDetailsObject.md) |  | [optional] 
**entity** | [**EntityObject**](EntityObject.md) |  | 

## Example

```python
from openapi_client.models.entity_check_details_object import EntityCheckDetailsObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityCheckDetailsObject from a JSON string
entity_check_details_object_instance = EntityCheckDetailsObject.from_json(json)
# print the JSON string representation of the object
print(EntityCheckDetailsObject.to_json())

# convert the object into a dict
entity_check_details_object_dict = entity_check_details_object_instance.to_dict()
# create an instance of EntityCheckDetailsObject from a dict
entity_check_details_object_from_dict = EntityCheckDetailsObject.from_dict(entity_check_details_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



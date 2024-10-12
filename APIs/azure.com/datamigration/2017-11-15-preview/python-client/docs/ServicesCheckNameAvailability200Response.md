# ServicesCheckNameAvailability200Response

Indicates whether a proposed resource name is available

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The localized reason why the name is not available, if nameAvailable is false | [optional] 
**name_available** | **bool** | If true, the name is valid and available. If false, &#39;reason&#39; describes why not. | [optional] 
**reason** | **str** | The reason why the name is not available, if nameAvailable is false | [optional] 

## Example

```python
from openapi_client.models.services_check_name_availability200_response import ServicesCheckNameAvailability200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesCheckNameAvailability200Response from a JSON string
services_check_name_availability200_response_instance = ServicesCheckNameAvailability200Response.from_json(json)
# print the JSON string representation of the object
print(ServicesCheckNameAvailability200Response.to_json())

# convert the object into a dict
services_check_name_availability200_response_dict = services_check_name_availability200_response_instance.to_dict()
# create an instance of ServicesCheckNameAvailability200Response from a dict
services_check_name_availability200_response_from_dict = ServicesCheckNameAvailability200Response.from_dict(services_check_name_availability200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



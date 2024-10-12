# AcsConfiguration

The ACS configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace** | **str** | The namespace. | 
**realm** | **str** | The realm. | 
**service_url** | **str** | The service URL. | 

## Example

```python
from openapi_client.models.acs_configuration import AcsConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AcsConfiguration from a JSON string
acs_configuration_instance = AcsConfiguration.from_json(json)
# print the JSON string representation of the object
print(AcsConfiguration.to_json())

# convert the object into a dict
acs_configuration_dict = acs_configuration_instance.to_dict()
# create an instance of AcsConfiguration from a dict
acs_configuration_from_dict = AcsConfiguration.from_dict(acs_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



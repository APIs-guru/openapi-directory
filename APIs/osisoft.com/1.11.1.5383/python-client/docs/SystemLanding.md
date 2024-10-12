# SystemLanding


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**SystemLandingLinks**](SystemLandingLinks.md) |  | [optional] 
**product_title** | **str** |  | [optional] 
**product_version** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.system_landing import SystemLanding

# TODO update the JSON string below
json = "{}"
# create an instance of SystemLanding from a JSON string
system_landing_instance = SystemLanding.from_json(json)
# print the JSON string representation of the object
print(SystemLanding.to_json())

# convert the object into a dict
system_landing_dict = system_landing_instance.to_dict()
# create an instance of SystemLanding from a dict
system_landing_from_dict = SystemLanding.from_dict(system_landing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



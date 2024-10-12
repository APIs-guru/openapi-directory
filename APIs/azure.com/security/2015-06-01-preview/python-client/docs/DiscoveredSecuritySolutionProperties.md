# DiscoveredSecuritySolutionProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer** | **str** | The security solutions&#39; image offer | 
**publisher** | **str** | The security solutions&#39; image publisher | 
**security_family** | **str** | The security family of the discovered solution | 
**sku** | **str** | The security solutions&#39; image sku | 

## Example

```python
from openapi_client.models.discovered_security_solution_properties import DiscoveredSecuritySolutionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredSecuritySolutionProperties from a JSON string
discovered_security_solution_properties_instance = DiscoveredSecuritySolutionProperties.from_json(json)
# print the JSON string representation of the object
print(DiscoveredSecuritySolutionProperties.to_json())

# convert the object into a dict
discovered_security_solution_properties_dict = discovered_security_solution_properties_instance.to_dict()
# create an instance of DiscoveredSecuritySolutionProperties from a dict
discovered_security_solution_properties_from_dict = DiscoveredSecuritySolutionProperties.from_dict(discovered_security_solution_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



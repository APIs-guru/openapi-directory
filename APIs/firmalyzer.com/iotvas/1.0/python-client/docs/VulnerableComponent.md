# VulnerableComponent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**cvss_max** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**vulnerabilities** | [**List[Vulnerability]**](Vulnerability.md) |  | [optional] 

## Example

```python
from openapi_client.models.vulnerable_component import VulnerableComponent

# TODO update the JSON string below
json = "{}"
# create an instance of VulnerableComponent from a JSON string
vulnerable_component_instance = VulnerableComponent.from_json(json)
# print the JSON string representation of the object
print(VulnerableComponent.to_json())

# convert the object into a dict
vulnerable_component_dict = vulnerable_component_instance.to_dict()
# create an instance of VulnerableComponent from a dict
vulnerable_component_from_dict = VulnerableComponent.from_dict(vulnerable_component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



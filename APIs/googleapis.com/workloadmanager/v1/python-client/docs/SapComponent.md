# SapComponent

The component of sap workload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | [**List[CloudResource]**](CloudResource.md) | Output only. resources in the component | [optional] [readonly] 
**sid** | **str** | Output only. sid is the sap component identificator | [optional] [readonly] 

## Example

```python
from openapi_client.models.sap_component import SapComponent

# TODO update the JSON string below
json = "{}"
# create an instance of SapComponent from a JSON string
sap_component_instance = SapComponent.from_json(json)
# print the JSON string representation of the object
print(SapComponent.to_json())

# convert the object into a dict
sap_component_dict = sap_component_instance.to_dict()
# create an instance of SapComponent from a dict
sap_component_from_dict = SapComponent.from_dict(sap_component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



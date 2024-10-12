# TechnologyArea

The Technology Area for a given technology that corresponds to the NASA Technology Roadmap.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code identifier for the Technology Area. | [optional] 
**id** | **int** | Unique identifier for the Technology Area. | [optional] 
**name** | **str** | The name of the Technology Area. | [optional] 

## Example

```python
from openapi_client.models.technology_area import TechnologyArea

# TODO update the JSON string below
json = "{}"
# create an instance of TechnologyArea from a JSON string
technology_area_instance = TechnologyArea.from_json(json)
# print the JSON string representation of the object
print(TechnologyArea.to_json())

# convert the object into a dict
technology_area_dict = technology_area_instance.to_dict()
# create an instance of TechnologyArea from a dict
technology_area_from_dict = TechnologyArea.from_dict(technology_area_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



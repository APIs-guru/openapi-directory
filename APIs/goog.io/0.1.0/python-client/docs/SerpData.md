# SerpData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** |  | 
**website** | **str** |  | 

## Example

```python
from openapi_client.models.serp_data import SerpData

# TODO update the JSON string below
json = "{}"
# create an instance of SerpData from a JSON string
serp_data_instance = SerpData.from_json(json)
# print the JSON string representation of the object
print(SerpData.to_json())

# convert the object into a dict
serp_data_dict = serp_data_instance.to_dict()
# create an instance of SerpData from a dict
serp_data_from_dict = SerpData.from_dict(serp_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



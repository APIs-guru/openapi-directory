# Economy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ghg_emissions_indicator** | **str** | Contains text like bad|Good|Very Good| Excellent | [optional] 
**ghg_emissions_rating** | **float** | Show vehicle impact on climate change in terms of greeenhouse gases. This rating will be in the range of 1 - 10 | [optional] 
**smog_indicator** | **str** | Contains text like bad|Good|Very Good| Excellent | [optional] 
**smog_rating** | **float** | Shows vehicle&#39;s emissions of pollutants known to cause smog and other forms of air pollution. This rating will be in the range of 1 - 10 | [optional] 

## Example

```python
from openapi_client.models.economy import Economy

# TODO update the JSON string below
json = "{}"
# create an instance of Economy from a JSON string
economy_instance = Economy.from_json(json)
# print the JSON string representation of the object
print(Economy.to_json())

# convert the object into a dict
economy_dict = economy_instance.to_dict()
# create an instance of Economy from a dict
economy_from_dict = Economy.from_dict(economy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



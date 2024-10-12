# GetListOfCountries200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alpha_2_code** | **str** |  | [optional] 
**alpha_3_code** | **str** |  | [optional] 
**latitude** | **float** |  | [optional] 
**longitude** | **float** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_list_of_countries200_response_inner import GetListOfCountries200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetListOfCountries200ResponseInner from a JSON string
get_list_of_countries200_response_inner_instance = GetListOfCountries200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetListOfCountries200ResponseInner.to_json())

# convert the object into a dict
get_list_of_countries200_response_inner_dict = get_list_of_countries200_response_inner_instance.to_dict()
# create an instance of GetListOfCountries200ResponseInner from a dict
get_list_of_countries200_response_inner_from_dict = GetListOfCountries200ResponseInner.from_dict(get_list_of_countries200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



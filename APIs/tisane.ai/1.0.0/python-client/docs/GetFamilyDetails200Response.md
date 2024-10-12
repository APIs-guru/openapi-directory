# GetFamilyDetails200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**hypernyms** | **List[List[float]]** |  | [optional] 
**perm_id** | **str** |  | [optional] 
**request_id** | **str** |  | [optional] 
**wikidata** | **str** |  | [optional] 
**wordnet30** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_family_details200_response import GetFamilyDetails200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetFamilyDetails200Response from a JSON string
get_family_details200_response_instance = GetFamilyDetails200Response.from_json(json)
# print the JSON string representation of the object
print(GetFamilyDetails200Response.to_json())

# convert the object into a dict
get_family_details200_response_dict = get_family_details200_response_instance.to_dict()
# create an instance of GetFamilyDetails200Response from a dict
get_family_details200_response_from_dict = GetFamilyDetails200Response.from_dict(get_family_details200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Serp200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **int** |  | [optional] 
**query** | **str** |  | [optional] 
**searched_results** | **int** |  | [optional] 
**website** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.serp200_response import Serp200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Serp200Response from a JSON string
serp200_response_instance = Serp200Response.from_json(json)
# print the JSON string representation of the object
print(Serp200Response.to_json())

# convert the object into a dict
serp200_response_dict = serp200_response_instance.to_dict()
# create an instance of Serp200Response from a dict
serp200_response_from_dict = Serp200Response.from_dict(serp200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Getcountrystandard200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**country_standard** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.getcountrystandard200_response import Getcountrystandard200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Getcountrystandard200Response from a JSON string
getcountrystandard200_response_instance = Getcountrystandard200Response.from_json(json)
# print the JSON string representation of the object
print(Getcountrystandard200Response.to_json())

# convert the object into a dict
getcountrystandard200_response_dict = getcountrystandard200_response_instance.to_dict()
# create an instance of Getcountrystandard200Response from a dict
getcountrystandard200_response_from_dict = Getcountrystandard200Response.from_dict(getcountrystandard200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



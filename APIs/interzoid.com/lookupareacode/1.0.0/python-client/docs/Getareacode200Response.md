# Getareacode200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abbreviation** | **str** |  | [optional] 
**area_code** | **str** |  | [optional] 
**code** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 
**locale** | **str** |  | [optional] 
**primary_city** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.getareacode200_response import Getareacode200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Getareacode200Response from a JSON string
getareacode200_response_instance = Getareacode200Response.from_json(json)
# print the JSON string representation of the object
print(Getareacode200Response.to_json())

# convert the object into a dict
getareacode200_response_dict = getareacode200_response_instance.to_dict()
# create an instance of Getareacode200Response from a dict
getareacode200_response_from_dict = Getareacode200Response.from_dict(getareacode200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Getglobalnumberinfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 
**language2** | **str** |  | [optional] 
**language3** | **str** |  | [optional] 
**mobile** | **str** |  | [optional] 
**primary_city** | **str** |  | [optional] 
**primary_language** | **str** |  | [optional] 
**region** | **str** |  | [optional] 
**wealth** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.getglobalnumberinfo200_response import Getglobalnumberinfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Getglobalnumberinfo200Response from a JSON string
getglobalnumberinfo200_response_instance = Getglobalnumberinfo200Response.from_json(json)
# print the JSON string representation of the object
print(Getglobalnumberinfo200Response.to_json())

# convert the object into a dict
getglobalnumberinfo200_response_dict = getglobalnumberinfo200_response_instance.to_dict()
# create an instance of Getglobalnumberinfo200Response from a dict
getglobalnumberinfo200_response_from_dict = Getglobalnumberinfo200Response.from_dict(getglobalnumberinfo200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



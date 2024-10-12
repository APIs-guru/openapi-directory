# GeneralApiInformation

General API information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.general_api_information import GeneralApiInformation

# TODO update the JSON string below
json = "{}"
# create an instance of GeneralApiInformation from a JSON string
general_api_information_instance = GeneralApiInformation.from_json(json)
# print the JSON string representation of the object
print(GeneralApiInformation.to_json())

# convert the object into a dict
general_api_information_dict = general_api_information_instance.to_dict()
# create an instance of GeneralApiInformation from a dict
general_api_information_from_dict = GeneralApiInformation.from_dict(general_api_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



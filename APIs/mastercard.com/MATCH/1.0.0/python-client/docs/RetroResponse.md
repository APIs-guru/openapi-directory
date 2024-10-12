# RetroResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_name** | **str** | Name of Merchant or Business corresponds to retro inquiry. | [optional] 
**city** | **str** | The name of the city for the merchant location corresponds to retro inquiry. | [optional] 
**country** | **str** | The three digit country code corresponds to retro inquiry. Valid values are Three digit alpha country codes as defined in ISO 3166-1. | [optional] 
**var_date** | **str** | Date on which the retro inquiry was made. This will be in MM/DD/YYYY format. | [optional] 
**ref_num** | **str** | The reference number of retroactive inquiry. Using this reference number, the details can be obtained. | [optional] 
**state** | **str** | The abbreviated state for a merchant location corresponds to retro inquiry. | [optional] 

## Example

```python
from openapi_client.models.retro_response import RetroResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RetroResponse from a JSON string
retro_response_instance = RetroResponse.from_json(json)
# print the JSON string representation of the object
print(RetroResponse.to_json())

# convert the object into a dict
retro_response_dict = retro_response_instance.to_dict()
# create an instance of RetroResponse from a dict
retro_response_from_dict = RetroResponse.from_dict(retro_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



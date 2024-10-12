# PricingsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PricingsListDefaultResponseError**](PricingsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.pricings_list_default_response import PricingsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PricingsListDefaultResponse from a JSON string
pricings_list_default_response_instance = PricingsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(PricingsListDefaultResponse.to_json())

# convert the object into a dict
pricings_list_default_response_dict = pricings_list_default_response_instance.to_dict()
# create an instance of PricingsListDefaultResponse from a dict
pricings_list_default_response_from_dict = PricingsListDefaultResponse.from_dict(pricings_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



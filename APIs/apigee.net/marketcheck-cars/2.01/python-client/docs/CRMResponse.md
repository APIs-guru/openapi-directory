# CRMResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**for_sale** | **str** | Boolean to indicate whether given vin has had listing after given date or not | [optional] 

## Example

```python
from openapi_client.models.crm_response import CRMResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CRMResponse from a JSON string
crm_response_instance = CRMResponse.from_json(json)
# print the JSON string representation of the object
print(CRMResponse.to_json())

# convert the object into a dict
crm_response_dict = crm_response_instance.to_dict()
# create an instance of CRMResponse from a dict
crm_response_from_dict = CRMResponse.from_dict(crm_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



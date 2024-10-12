# AddMerchantResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_reference_number** | **str** | A number assigned by the MATCH system to uniquely identify the newly added merchant. Return of this number indicates a successful add. | [optional] 
**name** | **str** | Name of the merchant that was added to the MATCH system as verification of what was added. | [optional] 

## Example

```python
from openapi_client.models.add_merchant_response import AddMerchantResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddMerchantResponse from a JSON string
add_merchant_response_instance = AddMerchantResponse.from_json(json)
# print the JSON string representation of the object
print(AddMerchantResponse.to_json())

# convert the object into a dict
add_merchant_response_dict = add_merchant_response_instance.to_dict()
# create an instance of AddMerchantResponse from a dict
add_merchant_response_from_dict = AddMerchantResponse.from_dict(add_merchant_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



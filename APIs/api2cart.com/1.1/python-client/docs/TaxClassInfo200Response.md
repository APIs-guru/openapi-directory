# TaxClassInfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**TaxClass**](TaxClass.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tax_class_info200_response import TaxClassInfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TaxClassInfo200Response from a JSON string
tax_class_info200_response_instance = TaxClassInfo200Response.from_json(json)
# print the JSON string representation of the object
print(TaxClassInfo200Response.to_json())

# convert the object into a dict
tax_class_info200_response_dict = tax_class_info200_response_instance.to_dict()
# create an instance of TaxClassInfo200Response from a dict
tax_class_info200_response_from_dict = TaxClassInfo200Response.from_dict(tax_class_info200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BEKDetails

BEK is bitlocker encrpytion key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_data** | **str** | BEK data. | [optional] 
**secret_url** | **str** | Secret is BEK. | [optional] 
**secret_vault_id** | **str** | ID of the Key Vault where this Secret is stored. | [optional] 

## Example

```python
from openapi_client.models.bek_details import BEKDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BEKDetails from a JSON string
bek_details_instance = BEKDetails.from_json(json)
# print the JSON string representation of the object
print(BEKDetails.to_json())

# convert the object into a dict
bek_details_dict = bek_details_instance.to_dict()
# create an instance of BEKDetails from a dict
bek_details_from_dict = BEKDetails.from_dict(bek_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



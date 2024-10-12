# KEKDetails

KEK is encryption key for BEK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_backup_data** | **str** | KEK data. | [optional] 
**key_url** | **str** | Key is KEK. | [optional] 
**key_vault_id** | **str** | Key Vault ID where this Key is stored. | [optional] 

## Example

```python
from openapi_client.models.kek_details import KEKDetails

# TODO update the JSON string below
json = "{}"
# create an instance of KEKDetails from a JSON string
kek_details_instance = KEKDetails.from_json(json)
# print the JSON string representation of the object
print(KEKDetails.to_json())

# convert the object into a dict
kek_details_dict = kek_details_instance.to_dict()
# create an instance of KEKDetails from a dict
kek_details_from_dict = KEKDetails.from_dict(kek_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



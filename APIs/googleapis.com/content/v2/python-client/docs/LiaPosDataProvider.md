# LiaPosDataProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pos_data_provider_id** | **str** | The ID of the POS data provider. | [optional] 
**pos_external_account_id** | **str** | The account ID by which this merchant is known to the POS data provider. | [optional] 

## Example

```python
from openapi_client.models.lia_pos_data_provider import LiaPosDataProvider

# TODO update the JSON string below
json = "{}"
# create an instance of LiaPosDataProvider from a JSON string
lia_pos_data_provider_instance = LiaPosDataProvider.from_json(json)
# print the JSON string representation of the object
print(LiaPosDataProvider.to_json())

# convert the object into a dict
lia_pos_data_provider_dict = lia_pos_data_provider_instance.to_dict()
# create an instance of LiaPosDataProvider from a dict
lia_pos_data_provider_from_dict = LiaPosDataProvider.from_dict(lia_pos_data_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



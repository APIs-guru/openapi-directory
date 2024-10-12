# LiasettingsListPosDataProvidersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#liasettingsListPosDataProvidersResponse\&quot;. | [optional] 
**pos_data_providers** | [**List[PosDataProviders]**](PosDataProviders.md) | The list of POS data providers for each eligible country | [optional] 

## Example

```python
from openapi_client.models.liasettings_list_pos_data_providers_response import LiasettingsListPosDataProvidersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LiasettingsListPosDataProvidersResponse from a JSON string
liasettings_list_pos_data_providers_response_instance = LiasettingsListPosDataProvidersResponse.from_json(json)
# print the JSON string representation of the object
print(LiasettingsListPosDataProvidersResponse.to_json())

# convert the object into a dict
liasettings_list_pos_data_providers_response_dict = liasettings_list_pos_data_providers_response_instance.to_dict()
# create an instance of LiasettingsListPosDataProvidersResponse from a dict
liasettings_list_pos_data_providers_response_from_dict = LiasettingsListPosDataProvidersResponse.from_dict(liasettings_list_pos_data_providers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



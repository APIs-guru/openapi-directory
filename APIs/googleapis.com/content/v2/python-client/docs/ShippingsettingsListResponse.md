# ShippingsettingsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#shippingsettingsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of shipping settings. | [optional] 
**resources** | [**List[ShippingSettings]**](ShippingSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.shippingsettings_list_response import ShippingsettingsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingsettingsListResponse from a JSON string
shippingsettings_list_response_instance = ShippingsettingsListResponse.from_json(json)
# print the JSON string representation of the object
print(ShippingsettingsListResponse.to_json())

# convert the object into a dict
shippingsettings_list_response_dict = shippingsettings_list_response_instance.to_dict()
# create an instance of ShippingsettingsListResponse from a dict
shippingsettings_list_response_from_dict = ShippingsettingsListResponse.from_dict(shippingsettings_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



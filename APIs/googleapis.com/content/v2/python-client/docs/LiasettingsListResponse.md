# LiasettingsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#liasettingsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of LIA settings. | [optional] 
**resources** | [**List[LiaSettings]**](LiaSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.liasettings_list_response import LiasettingsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LiasettingsListResponse from a JSON string
liasettings_list_response_instance = LiasettingsListResponse.from_json(json)
# print the JSON string representation of the object
print(LiasettingsListResponse.to_json())

# convert the object into a dict
liasettings_list_response_dict = liasettings_list_response_instance.to_dict()
# create an instance of LiasettingsListResponse from a dict
liasettings_list_response_from_dict = LiasettingsListResponse.from_dict(liasettings_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



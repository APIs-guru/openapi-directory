# AdministratorWebTokenSpecPlaySearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approve_apps** | **bool** | Allow access to the iframe in approve mode. Default is false. | [optional] 
**enabled** | **bool** | Whether the managed Play Search apps page is displayed. Default is true. | [optional] 

## Example

```python
from openapi_client.models.administrator_web_token_spec_play_search import AdministratorWebTokenSpecPlaySearch

# TODO update the JSON string below
json = "{}"
# create an instance of AdministratorWebTokenSpecPlaySearch from a JSON string
administrator_web_token_spec_play_search_instance = AdministratorWebTokenSpecPlaySearch.from_json(json)
# print the JSON string representation of the object
print(AdministratorWebTokenSpecPlaySearch.to_json())

# convert the object into a dict
administrator_web_token_spec_play_search_dict = administrator_web_token_spec_play_search_instance.to_dict()
# create an instance of AdministratorWebTokenSpecPlaySearch from a dict
administrator_web_token_spec_play_search_from_dict = AdministratorWebTokenSpecPlaySearch.from_dict(administrator_web_token_spec_play_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



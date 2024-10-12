# NavigationInfo

Information of navigation behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_forced_redirect** | **bool** | If this option is on, FDL click will be forced to redirect rather than show an interstitial page. | [optional] 

## Example

```python
from openapi_client.models.navigation_info import NavigationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NavigationInfo from a JSON string
navigation_info_instance = NavigationInfo.from_json(json)
# print the JSON string representation of the object
print(NavigationInfo.to_json())

# convert the object into a dict
navigation_info_dict = navigation_info_instance.to_dict()
# create an instance of NavigationInfo from a dict
navigation_info_from_dict = NavigationInfo.from_dict(navigation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



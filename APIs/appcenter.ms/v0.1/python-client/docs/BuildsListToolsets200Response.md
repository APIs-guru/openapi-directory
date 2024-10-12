# BuildsListToolsets200Response

Set of toolsets available for app

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node** | [**List[BuildsListToolsets200ResponseNodeInner]**](BuildsListToolsets200ResponseNodeInner.md) | A list of Node versions | [optional] 
**xamarin** | [**List[BuildsListToolsets200ResponseXamarinInner]**](BuildsListToolsets200ResponseXamarinInner.md) | A list of Xamarin SDK bundles | [optional] 
**xcode** | [**List[BuildsListToolsets200ResponseXcodeInner]**](BuildsListToolsets200ResponseXcodeInner.md) | A list of Xcode versions | [optional] 

## Example

```python
from openapi_client.models.builds_list_toolsets200_response import BuildsListToolsets200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListToolsets200Response from a JSON string
builds_list_toolsets200_response_instance = BuildsListToolsets200Response.from_json(json)
# print the JSON string representation of the object
print(BuildsListToolsets200Response.to_json())

# convert the object into a dict
builds_list_toolsets200_response_dict = builds_list_toolsets200_response_instance.to_dict()
# create an instance of BuildsListToolsets200Response from a dict
builds_list_toolsets200_response_from_dict = BuildsListToolsets200Response.from_dict(builds_list_toolsets200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



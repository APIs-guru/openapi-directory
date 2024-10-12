# UrlList

UrlList proto helps users to set reusable, independently manageable lists of hosts, host patterns, URLs, URL patterns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the security policy was created. | [optional] [readonly] 
**description** | **str** | Optional. Free-text description of the resource. | [optional] 
**name** | **str** | Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). | [optional] 
**update_time** | **str** | Output only. Time when the security policy was updated. | [optional] [readonly] 
**values** | **List[str]** | Required. FQDNs and URLs. | [optional] 

## Example

```python
from openapi_client.models.url_list import UrlList

# TODO update the JSON string below
json = "{}"
# create an instance of UrlList from a JSON string
url_list_instance = UrlList.from_json(json)
# print the JSON string representation of the object
print(UrlList.to_json())

# convert the object into a dict
url_list_dict = url_list_instance.to_dict()
# create an instance of UrlList from a dict
url_list_from_dict = UrlList.from_dict(url_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



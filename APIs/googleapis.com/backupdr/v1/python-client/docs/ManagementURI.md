# ManagementURI

ManagementURI for the Management Server resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | **str** | Output only. The ManagementServer AGM/RD API URL. | [optional] [readonly] 
**web_ui** | **str** | Output only. The ManagementServer AGM/RD WebUI URL. | [optional] [readonly] 

## Example

```python
from openapi_client.models.management_uri import ManagementURI

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementURI from a JSON string
management_uri_instance = ManagementURI.from_json(json)
# print the JSON string representation of the object
print(ManagementURI.to_json())

# convert the object into a dict
management_uri_dict = management_uri_instance.to_dict()
# create an instance of ManagementURI from a dict
management_uri_from_dict = ManagementURI.from_dict(management_uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



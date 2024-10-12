# ListByCustomRPManifest

List of custom resource providers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[CustomRPManifest]**](CustomRPManifest.md) | The array of custom resource provider manifests. | [optional] 

## Example

```python
from openapi_client.models.list_by_custom_rp_manifest import ListByCustomRPManifest

# TODO update the JSON string below
json = "{}"
# create an instance of ListByCustomRPManifest from a JSON string
list_by_custom_rp_manifest_instance = ListByCustomRPManifest.from_json(json)
# print the JSON string representation of the object
print(ListByCustomRPManifest.to_json())

# convert the object into a dict
list_by_custom_rp_manifest_dict = list_by_custom_rp_manifest_instance.to_dict()
# create an instance of ListByCustomRPManifest from a dict
list_by_custom_rp_manifest_from_dict = ListByCustomRPManifest.from_dict(list_by_custom_rp_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



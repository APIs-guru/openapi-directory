# AssetErrors

Object that describes any errors that happened when processing this asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | **List[str]** | Error messages with more details. | [optional] 
**type** | **str** | The type of error that occurred for this asset. | [optional] 

## Example

```python
from openapi_client.models.asset_errors import AssetErrors

# TODO update the JSON string below
json = "{}"
# create an instance of AssetErrors from a JSON string
asset_errors_instance = AssetErrors.from_json(json)
# print the JSON string representation of the object
print(AssetErrors.to_json())

# convert the object into a dict
asset_errors_dict = asset_errors_instance.to_dict()
# create an instance of AssetErrors from a dict
asset_errors_from_dict = AssetErrors.from_dict(asset_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RemixInfo

Info about the sources of this asset (i.e. assets that were remixed to create this asset).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_asset** | **List[str]** | Resource ids for the sources of this remix, of the form: &#x60;assets/{ASSET_ID}&#x60; | [optional] 

## Example

```python
from openapi_client.models.remix_info import RemixInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RemixInfo from a JSON string
remix_info_instance = RemixInfo.from_json(json)
# print the JSON string representation of the object
print(RemixInfo.to_json())

# convert the object into a dict
remix_info_dict = remix_info_instance.to_dict()
# create an instance of RemixInfo from a dict
remix_info_from_dict = RemixInfo.from_dict(remix_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



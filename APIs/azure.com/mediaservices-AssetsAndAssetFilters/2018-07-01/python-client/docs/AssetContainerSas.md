# AssetContainerSas

The Asset Storage container SAS URLs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_container_sas_urls** | **List[str]** | The list of Asset container SAS URLs. | [optional] 

## Example

```python
from openapi_client.models.asset_container_sas import AssetContainerSas

# TODO update the JSON string below
json = "{}"
# create an instance of AssetContainerSas from a JSON string
asset_container_sas_instance = AssetContainerSas.from_json(json)
# print the JSON string representation of the object
print(AssetContainerSas.to_json())

# convert the object into a dict
asset_container_sas_dict = asset_container_sas_instance.to_dict()
# create an instance of AssetContainerSas from a dict
asset_container_sas_from_dict = AssetContainerSas.from_dict(asset_container_sas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



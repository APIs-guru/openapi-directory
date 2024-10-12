# QuotaBaseProperties

The properties for Quota update or retrieval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Specifies the resource ID. | [optional] 
**limit** | **int** | The maximum permitted quota of the resource. | [optional] 
**type** | **str** | Specifies the resource type. | [optional] 
**unit** | **str** | An enum describing the unit of quota measurement. | [optional] 

## Example

```python
from openapi_client.models.quota_base_properties import QuotaBaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaBaseProperties from a JSON string
quota_base_properties_instance = QuotaBaseProperties.from_json(json)
# print the JSON string representation of the object
print(QuotaBaseProperties.to_json())

# convert the object into a dict
quota_base_properties_dict = quota_base_properties_instance.to_dict()
# create an instance of QuotaBaseProperties from a dict
quota_base_properties_from_dict = QuotaBaseProperties.from_dict(quota_base_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# MarketingMaterial

Marketing material for a gallery item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**learn_uri** | **str** | URI to educational material. | [optional] 
**path** | **str** | Path to the marketing site. | [optional] 

## Example

```python
from openapi_client.models.marketing_material import MarketingMaterial

# TODO update the JSON string below
json = "{}"
# create an instance of MarketingMaterial from a JSON string
marketing_material_instance = MarketingMaterial.from_json(json)
# print the JSON string representation of the object
print(MarketingMaterial.to_json())

# convert the object into a dict
marketing_material_dict = marketing_material_instance.to_dict()
# create an instance of MarketingMaterial from a dict
marketing_material_from_dict = MarketingMaterial.from_dict(marketing_material_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



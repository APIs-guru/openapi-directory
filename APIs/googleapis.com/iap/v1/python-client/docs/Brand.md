# Brand

OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_title** | **str** | Application name displayed on OAuth consent screen. | [optional] 
**name** | **str** | Output only. Identifier of the brand. NOTE: GCP project number achieves the same brand identification purpose as only one brand per project can be created. | [optional] [readonly] 
**org_internal_only** | **bool** | Output only. Whether the brand is only intended for usage inside the G Suite organization only. | [optional] [readonly] 
**support_email** | **str** | Support email displayed on the OAuth consent screen. | [optional] 

## Example

```python
from openapi_client.models.brand import Brand

# TODO update the JSON string below
json = "{}"
# create an instance of Brand from a JSON string
brand_instance = Brand.from_json(json)
# print the JSON string representation of the object
print(Brand.to_json())

# convert the object into a dict
brand_dict = brand_instance.to_dict()
# create an instance of Brand from a dict
brand_from_dict = Brand.from_dict(brand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



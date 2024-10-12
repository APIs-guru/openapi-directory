# Brand


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**additional_fields** | **object** |  | [optional] 
**created_time** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**full_description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**images** | [**List[Image]**](Image.md) |  | [optional] 
**meta_description** | **str** |  | [optional] 
**meta_keywords** | **str** |  | [optional] 
**meta_title** | **str** |  | [optional] 
**modified_time** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**short_description** | **str** |  | [optional] 
**stores_ids** | **List[str]** |  | [optional] 
**url** | **str** |  | [optional] 

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



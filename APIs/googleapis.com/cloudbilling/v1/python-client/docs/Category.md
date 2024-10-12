# Category

Represents the category hierarchy of a SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_family** | **str** | The type of product the SKU refers to. Example: \&quot;Compute\&quot;, \&quot;Storage\&quot;, \&quot;Network\&quot;, \&quot;ApplicationServices\&quot; etc. | [optional] 
**resource_group** | **str** | A group classification for related SKUs. Example: \&quot;RAM\&quot;, \&quot;GPU\&quot;, \&quot;Prediction\&quot;, \&quot;Ops\&quot;, \&quot;GoogleEgress\&quot; etc. | [optional] 
**service_display_name** | **str** | The display name of the service this SKU belongs to. | [optional] 
**usage_type** | **str** | Represents how the SKU is consumed. Example: \&quot;OnDemand\&quot;, \&quot;Preemptible\&quot;, \&quot;Commit1Mo\&quot;, \&quot;Commit1Yr\&quot; etc. | [optional] 

## Example

```python
from openapi_client.models.category import Category

# TODO update the JSON string below
json = "{}"
# create an instance of Category from a JSON string
category_instance = Category.from_json(json)
# print the JSON string representation of the object
print(Category.to_json())

# convert the object into a dict
category_dict = category_instance.to_dict()
# create an instance of Category from a dict
category_from_dict = Category.from_dict(category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


